import React from 'react'
import RegionSelectForm from './RegionSelectForm'
import AddressInputForm from './AddressInputForm'
import useFormStore from '../../../../stores/useFormStore'

export default function RegionSubmitPage() {
  const cityId = useFormStore((state) => state.cityId)

  return (
    <>
      <RegionSelectForm />
      {cityId !== 0 && <AddressInputForm />}
    </>
  )
}
