import React from 'react'
import styled from 'styled-components'
import { useShallow } from 'zustand/react/shallow'

import CategoryList from './CategoryList'
import SubcategoryList from './SubcategoryList'
import TagSelectForm from './TagSelectForm'
import useFormStore from '../../../../stores/useFormStore'

export default function CategorSubmitForm() {
  const [categoryId, subcategoryId] = useFormStore(
    useShallow((state) => [state.categoryId, state.subcategoryId])
  )

  return (
    <>
      <h2>
        상품 분류를 <br />
        선택해주세요
      </h2>
      <h3>상품 분류</h3>
      <Wrapper>
        <CategoryList />
        {categoryId !== 0 && <SubcategoryList />}
      </Wrapper>
      {subcategoryId !== 0 && <TagSelectForm subcategory={subcategoryId} />}
    </>
  )
}

const Wrapper = styled.div`
  width: 37.5rem;
  display: flex;
  margin-bottom: 1.875rem;
`
