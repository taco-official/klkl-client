import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import useFormStore from '@stores/useFormStore'
import SelectionList from '../RegionSubmit/SelectionList'

const useCategorySetter = () => {
  const setFormContents = useFormStore((state) => state.setFormContents)

  const setCategory = (category) =>
    setFormContents({ category, subcategory: undefined })

  const setSubcategory = (subcategory) => setFormContents({ subcategory })

  return [setCategory, setSubcategory]
}

function CategorySelectList({ categories }) {
  const [category, subcategory] = useFormStore(
    useShallow((state) => [state.category, state.subcategory])
  )
  const [setCategory, setSubcategory] = useCategorySetter()

  return (
    <ListWrapper>
      <SelectionList
        optionList={categories}
        optionState={category?.id}
        setOptionState={setCategory}
        $width={`${100 / 2}%`}
      />
      {category && (
        <SelectionList
          optionList={category.subcategories}
          optionState={subcategory?.id}
          setOptionState={setSubcategory}
          $width={`${100 / 2}%`}
        />
      )}
    </ListWrapper>
  )
}
CategorySelectList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
}

const ListWrapper = styled.div`
  width: 37.5rem;
  display: flex;
  margin-bottom: 1.875rem;
`

export default CategorySelectList
