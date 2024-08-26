import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import useFormStore from '../../../../stores/useFormStore'
import SelectionList from '../RegionSubmit/SelectionList'
import useKyQuery from '../../../../hooks/useKyQuery'

const useSubcategoryStore = () => {
  const [categoryId, subcategoryId] = useFormStore(
    useShallow((state) => [state.categoryId, state.subcategoryId])
  )
  const setFormContents = useFormStore((state) => state.setFormContents)
  const setSubcategoryId = (id) => setFormContents({ subcategoryId: id })

  return [categoryId, subcategoryId, setSubcategoryId]
}

export default function SubcategoryList() {
  const [categoryId, subcategoryId, setSubcategoryId] = useSubcategoryStore()

  const {
    data: subcategories,
    isError,
    error,
    isLoading,
  } = useKyQuery(`categories/${categoryId}/subcategories`)

  if (isLoading) return <SelectionList $width={`${100 / 2}%`} />
  if (isError) return <div>{error}</div>

  return (
    <SelectionList
      optionList={subcategories.data.subcategories}
      optionState={subcategoryId}
      setOptionState={(id) => setSubcategoryId(id)}
      $width={`${100 / 2}%`}
    />
  )
}
