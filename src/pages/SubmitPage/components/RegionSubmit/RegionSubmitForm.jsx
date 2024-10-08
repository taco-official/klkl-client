import React from 'react'
import useKyQuery from '@hooks/useKyQuery'
import RegionSelectList from './RegionSelectList'
import AddressInputForm from './AddressInputForm'

export default function RegionSubmitPage() {
  const { data: regions } = useKyQuery('regions/hierarchy')

  return (
    <>
      <RegionSelectList regions={regions?.data} />
      <AddressInputForm />
    </>
  )
}
