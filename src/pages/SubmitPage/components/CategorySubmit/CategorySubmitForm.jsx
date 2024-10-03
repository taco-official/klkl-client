import React from 'react'
import useKyQuery from '@hooks/useKyQuery'
import CategorySelectList from './CategorySelectList'
import TagSelectForm from './TagSelectForm'

export default function CategorySubmitForm() {
  const { data: categories } = useKyQuery('categories/hierarchy')

  return (
    <>
      <h2>
        상품 분류를 <br />
        선택해주세요
      </h2>
      <h3>상품 분류</h3>

      <CategorySelectList categories={categories?.data} />
      <TagSelectForm />
    </>
  )
}
