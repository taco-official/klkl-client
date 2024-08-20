import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import SelectionList from './SelectionList'
import { useKyQuery } from '../../../../hooks/useKyQuery'
import useFormStore from '../../../../stores/useFormStore'

const useCountryState = () => {
  const [continentId, countryId] = useFormStore(
    useShallow((state) => [state.continentId, state.countryId])
  )
  const setFormContents = useFormStore((state) => state.setFormContents)
  const setCountryId = (id) => setFormContents({ countryId: id, cityId: 0 })

  return [continentId, countryId, setCountryId]
}

function CountryList() {
  const [continentId, countryId, setCountryId] = useCountryState()
  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useKyQuery(`regions/${continentId}/countries`)

  if (isLoading) return <SelectionList $width={`${100 / 3}%`} />
  if (isError) return <div>{error}</div>

  return (
    <SelectionList
      optionList={countries.data}
      optionState={countryId}
      setOptionState={(id) => setCountryId(id)}
      $width={`${100 / 3}%`}
    />
  )
}

export default CountryList
