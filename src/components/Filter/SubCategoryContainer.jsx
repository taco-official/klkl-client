import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import { useSelectedSubCategory } from './BasicFilterContext'
import { FilterContainer } from './BasicFilter.style'

function SubCategoryCheckbox({ subCategory }) {
  const { selectedSubCategory, setSelectedSubCategory } =
    useSelectedSubCategory()

  const handleCheckboxChange = useCallback(() => {
    if (
      selectedSubCategory.some(
        (selected) => selected.id === subCategory.subCategoryId
      )
    ) {
      setSelectedSubCategory(
        selectedSubCategory.filter(
          (selected) => selected.id !== subCategory.subCategoryId
        )
      )
    } else {
      setSelectedSubCategory([
        ...selectedSubCategory,
        {
          categoryId: subCategory.categoryId,
          id: subCategory.subCategoryId,
          name: subCategory.name,
        },
      ])
    }
  }, [selectedSubCategory, setSelectedSubCategory, subCategory])

  useEffect(() => {
    console.log('selectedSubCategory', selectedSubCategory)
  }, [selectedSubCategory])

  return (
    <Checkbox
      checked={selectedSubCategory.some(
        (selected) => selected.id === subCategory.subCategoryId
      )}
      onChange={handleCheckboxChange}
    >
      {subCategory.name}
    </Checkbox>
  )
}

SubCategoryCheckbox.propTypes = {
  subCategory: PropTypes.shape({
    categoryId: PropTypes.number.isRequired,
    subCategoryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function SubCategoryContainer({ categoryId }) {
  const [subCategories, setSubCategories] = useState([])

  const fetchSubCategories = useCallback((id) => {
    const subCategoriesData = {
      10000: {
        data: [
          {
            categoryId: 10000,
            subCategoryId: 10001,
            name: '서브 카테고리 1-1',
          },
          {
            categoryId: 10000,
            subCategoryId: 10002,
            name: '서브 카테고리 1-2',
          },
          {
            categoryId: 10000,
            subCategoryId: 10003,
            name: '서브 카테고리 1-3',
          },
        ],
      },
      20000: {
        data: [
          {
            categoryId: 20000,
            subCategoryId: 20001,
            name: '서브 카테고리 2-1',
          },
          {
            categoryId: 20000,
            subCategoryId: 20002,
            name: '서브 카테고리 2-2',
          },
          {
            categoryId: 20000,
            subCategoryId: 20003,
            name: '서브 카테고리 2-3',
          },
        ],
      },
    }
    setSubCategories(subCategoriesData[id] ? subCategoriesData[id].data : [])
  }, [])

  useEffect(() => {
    fetchSubCategories(categoryId)
  }, [fetchSubCategories, categoryId])

  return (
    <FilterContainer>
      {subCategories.map((subCategory) => (
        <SubCategoryCheckbox
          key={subCategory.subCategoryId}
          subCategory={subCategory}
        />
      ))}
    </FilterContainer>
  )
}

SubCategoryContainer.propTypes = {
  categoryId: PropTypes.number.isRequired,
}

export default SubCategoryContainer
