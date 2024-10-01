import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import useFormStore from '@stores/useFormStore'

const useInitialData = () => {
  const resetFormContents = useFormStore((state) => state.resetFormContents)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const data = useLoaderData()

  useEffect(() => {
    if (window.location.pathname !== '/submit') {
      const review = data.data

      setFormContents({
        images: review.images,
        name: review.name,
        description: review.description,
        address: review.address,
        price: review.price,
        rating: review.rating,
        currencyId: review.currency?.id,
        tags: new Set(review.tags.map((tag) => tag.id)),
      })
    }

    return () => {
      resetFormContents()
    }
  }, [])
}

export default useInitialData
