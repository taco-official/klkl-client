import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import SelectionList from './SelectionList'
import useKyQuery from '../../../../hooks/useKyQuery'
import useFormStore from '../../../../stores/useFormStore'

const useCityState = () => {
  const [countryId, cityId] = useFormStore(
    useShallow((state) => [state.countryId, state.cityId])
  )
  const setFormContents = useFormStore((state) => state.setFormContents)
  const setCityId = (id) => setFormContents({ cityId: id })

  return [countryId, cityId, setCityId]
}

function CityList() {
  const [countryId, cityId, setCityId] = useCityState()
  const {
    data: cities,
    isLoading,
    isError,
    error,
  } = useKyQuery(`countries/${countryId}/cities`)

  if (isLoading) return <SelectionList $width={`${100 / 3}%`} />
  if (isError) return <div>{error}</div>

  return (
    <SelectionList
      optionList={cities.data}
      optionState={cityId}
      setOptionState={(id) => setCityId(id)}
      $width={`${100 / 3}%`}
    />
  )
}

export default CityList
