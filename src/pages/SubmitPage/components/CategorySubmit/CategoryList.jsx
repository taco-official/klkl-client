import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import useFormStore from '../../../../stores/useFormStore'
import SelectionList from '../RegionSubmit/SelectionList'
import useKyQuery from '../../../../hooks/useKyQuery'

const useCategoryStore = () => {
  const categoryId = useFormStore(useShallow((state) => state.categoryId))
  const setFormContents = useFormStore((state) => state.setFormContents)
  const setCategoryId = (id) =>
    setFormContents({ categoryId: id, subcategoryId: 0 })

  return [categoryId, setCategoryId]
}

export default function CategoryList() {
  const [categoryId, setCategoryId] = useCategoryStore()

  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useKyQuery('categories')

  if (isLoading) return <SelectionList $width={`${100 / 2}%`} />
  if (isError) return <div>{error}</div>

  return (
    <SelectionList
      optionList={categories.data}
      optionState={categoryId}
      setOptionState={(id) => setCategoryId(id)}
      $width={`${100 / 2}%`}
    />
  )
}
