import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'

const useTagData = () => {
  const { categoryData: data } = useLoaderData()
  const { selectedCategory, selectedSubcategory } = useFeedStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
      selectedSubcategory: state.selectedSubcategory,
    }))
  )
  const [tagArray, setTagArray] = useState([])

  useEffect(() => {
    const subcategories = []
    if (!selectedSubcategory.length) {
      const categories = []
      if (!selectedCategory.length) categories.push(...data.data)
      else categories.push(...selectedCategory)
      subcategories.push(
        ...categories.reduce((acc, category) => {
          acc.push(...category.subcategories)
          return acc
        }, [])
      )
    } else subcategories.push(...selectedSubcategory)

    const filteredTags = subcategories
      .reduce((acc, subcategory) => {
        acc.push(...subcategory.tags)
        return acc
      }, [])
      .reduce((acc, tag) => {
        if (acc.some((t) => t.id === tag.id)) return acc
        acc.push(tag)
        return acc
      }, [])
    setTagArray(filteredTags)
  }, [selectedCategory, selectedSubcategory])
  return tagArray
}

export default useTagData
