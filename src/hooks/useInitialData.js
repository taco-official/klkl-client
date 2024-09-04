import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFormStore from '../stores/useFormStore'
import { kyInstance } from './kyInstance'

const useInitialData = () => {
  const resetFormContents = useFormStore((state) => state.resetFormContents)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const { id } = useParams()

  useEffect(() => {
    if (window.location.pathname !== '/submit') {
      const getReviewData = async () => {
        const { data: review } = await kyInstance.get(`products/${id}`).json()
        setFormContents({
          images: review.images.map((image) => image.url),
          name: review.name,
          description: review.description,
          address: review.address,
          price: review.price,
          rating: review.rating,
          currencyId: review.currency.id,
          tags: new Set(review.tags.map((tag) => tag.id)),
        })
      }

      getReviewData()
    }

    return () => {
      resetFormContents()
    }
  }, [])
}

export default useInitialData
