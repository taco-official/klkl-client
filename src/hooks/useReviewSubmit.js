import { useEffect } from 'react'
import ky from 'ky'
import { useNavigate } from 'react-router-dom'

import { kyInstance } from './kyInstance'
import useFormStore from '../stores/useFormStore'

const useReviewSubmit = (httpMethod, uri) => {
  const reviewData = useFormStore((state) => ({
    name: state.name,
    description: state.description,
    currencyId: state.currencyId,
    price: state.price,
    rating: state.rating,
    cityId: state.cityId,
    address: state.address,
    subcategoryId: state.subcategoryId,
    tagIds: [...state.tags],
  }))

  const images = useFormStore((state) => state.images)
  const resetReviewContents = useFormStore((state) => state.resetFormContents)
  const navigate = useNavigate()

  const getPresignedUrl = async (id) => {
    const promises = images.map((image) =>
      kyInstance
        .post(`products/${id}/upload-url`, {
          body: JSON.stringify({ fileExtension: image.type.split('/')[1] }),
        })
        .json()
    )
    return Promise.all(promises)
  }

  const uploadToS3 = async (presignedUrls) => {
    const promises = presignedUrls.map((url, i) =>
      ky
        .put(url, {
          headers: {
            'X-Amz-Acl': 'private',
            'Content-Type': images[i].type,
          },
          body: images[i],
          retry: 0,
        })
        .json()
    )
    return Promise.all(promises)
  }

  const sendUploadComplete = async (id) => {
    await kyInstance.post(`products/${id}/upload-complete`).json()
  }

  const uploadImage = async (id) => {
    try {
      const responses = await getPresignedUrl(id)
      const presignedUrls = responses.map(
        (response) => response.data.presignedUrl
      )
      await uploadToS3(presignedUrls)
      await sendUploadComplete(id)
      resetReviewContents()
      navigate(`/products/${id}`)
    } catch (err) {
      console.log(err)
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
