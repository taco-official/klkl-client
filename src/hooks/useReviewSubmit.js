import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadToS3 from '@utils/uploadToS3'
import useFormStore from '@stores/useFormStore'
import { kyInstance } from '@utils/kyInstance'

const useReviewSubmit = (httpMethod, uri, goPrevStep) => {
  const reviewData = useFormStore((state) => ({
    name: state.name,
    description: state.description,
    currencyId: state.currencyId,
    price: state.price,
    rating: state.rating,
    cityId: state.city?.id,
    address: state.address,
    subcategoryId: state.subcategory?.id,
    tagIds: [...state.tags],
  }))

  const images = useFormStore((state) => state.images)
  const resetReviewContents = useFormStore((state) => state.resetFormContents)
  const navigate = useNavigate()

  const getPresignedUrl = async (id, sendImages) => {
    const body = {
      fileExtensions: sendImages.map((image) => image.type.split('/')[1]),
    }

    const response = await kyInstance
      .post(`products/${id}/upload-url`, { body: JSON.stringify(body) })
      .json()

    return response.data
  }

  const sendUploadComplete = async (id, presignedUrls) => {
    const imageIds = []

    images.forEach((image) => {
      if (id in image) imageIds.push(image.id)
    })

    presignedUrls.forEach((presignedUrl) => imageIds.push(presignedUrl.id))

    await kyInstance.post(`products/${id}/upload-complete`, {
      body: JSON.stringify({ imageIds: [...imageIds] }),
    })
  }

  const uploadImage = async (id) => {
    try {
      const sendImages = images.filter((image) => typeof image !== 'string')

      if (sendImages.length !== 0) {
        const presignedUrls = await getPresignedUrl(id, sendImages)
        await uploadToS3(presignedUrls, sendImages)
        await sendUploadComplete(id, presignedUrls)
      }

      resetReviewContents()
      navigate(`/products/${id}`, { state: { from: window.location.pathname } })
    } catch (err) {
      alert(`이미지 업로드를 실패했습니다\n다시 시도해주세요`)
      console.error(err)
      await kyInstance.delete(`products/${id}`)
      goPrevStep()
    }
  }

  const postReview = async () => {
    const response = await kyInstance[httpMethod](uri, {
      body: JSON.stringify(reviewData),
    }).json()

    await uploadImage(response.data.id)
  }

  useEffect(() => {
    postReview()
  }, [])
}

export default useReviewSubmit
