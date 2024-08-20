import React from 'react'

import SelectionList from './SelectionList'
import { useKyQuery } from '../../../../hooks/useKyQuery'
import useFormStore from '../../../../stores/useFormStore'

const useContinentState = () => {
  const continentId = useFormStore((state) => state.continentId)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const setContinentId = (id) =>
    setFormContents({ continentId: id, countryId: 0, cityId: 0 })

  return [continentId, setContinentId]
}

function ContinentList() {
  const [continentId, setContinentId] = useContinentState()
  const { data: continents, isLoading, isError, error } = useKyQuery('regions')

  if (isLoading) return <SelectionList $width={`${100 / 3}%`} />
  if (isError) return <div>{error}</div>

  return (
    <SelectionList
      optionList={continents.data}
      optionState={continentId}
      setOptionState={(id) => setContinentId(id)}
      $width={`${100 / 3}%`}
    />
  )
}

export default ContinentList
