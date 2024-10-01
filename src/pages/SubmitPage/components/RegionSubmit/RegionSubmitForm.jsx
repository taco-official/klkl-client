import React from 'react'
import RegionSelectList from './RegionSelectList'
import AddressInputForm from './AddressInputForm'
import useKyQuery from '@hooks/useKyQuery'

export default function RegionSubmitPage() {
  const { data: regions } = useKyQuery('regions/hierarchy')

  return (
    <>
      <RegionSelectList regions={regions?.data} />
      <AddressInputForm />
    </>
  )
}
