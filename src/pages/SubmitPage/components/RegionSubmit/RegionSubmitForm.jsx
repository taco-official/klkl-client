import React from 'react'
import RegionSelectList from './RegionSelectList'
import AddressInputForm from './AddressInputForm'
import useKyQuery from '../../../../hooks/useKyQuery'

export default function RegionSubmitPage() {
  const { data: regions, status } = useKyQuery('regions')

  if (status === 'pending') return null

  return (
    <>
      <RegionSelectList regions={regions.data} />
      <AddressInputForm />
    </>
  )
}
