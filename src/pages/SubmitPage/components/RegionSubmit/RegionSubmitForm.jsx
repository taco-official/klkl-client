import React from 'react'
import useKyQuery from '@hooks/useKyQuery'
import RegionSelectList from './RegionSelectList'
import AddressInputForm from './AddressInputForm'

export default function RegionSubmitPage() {
  const { data: regions } = useKyQuery('regions/hierarchy', undefined, {
    gcTime: 300000,
    staleTime: 300000,
  })

  return (
    <>
      <RegionSelectList regions={regions?.data} />
      <AddressInputForm />
    </>
  )
}
