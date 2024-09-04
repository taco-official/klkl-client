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
    const responses = []

    await images.reduce((promise, image) => {
      if (typeof image === 'string') return promise
      return promise
        .then(() => {
          return kyInstance
            .post(`products/${id}/upload-url`, {
              body: JSON.stringify({ fileExtension: image.type.split('/')[1] }),
            })
            .json()
        })
        .then(({ data }) => {
          responses.push(data.presignedUrl)
        })
    }, Promise.resolve())

    return responses
  }

  const uploadToS3 = async (presignedUrls, sendImage) => {
    const promises = presignedUrls.map((url, i) =>
      ky
        .put(url, {
          headers: {
            'X-Amz-Acl': 'private',
            'Content-Type': sendImage[i].type,
          },
          body: sendImage[i],
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
      const presignedUrls = await getPresignedUrl(id)
      if (presignedUrls.length !== 0) {
        const sendImage = images.filter((image) => typeof image !== 'string')
        await uploadToS3(presignedUrls, sendImage)
        await sendUploadComplete(id)
      }
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
