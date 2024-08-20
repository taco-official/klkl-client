import React from 'react'
import styled from 'styled-components'
import { useShallow } from 'zustand/react/shallow'

import useFormStore from '../../../../stores/useFormStore'
import ContinentList from './ContinentList'
import CountryList from './CountryList'
import CityList from './CityList'

export default function RegionSelectForm() {
  const [continentId, countryId] = useFormStore(
    useShallow((state) => [state.continentId, state.countryId])
  )

  return (
    <>
      <h2>
        구매 지역을
        <br />
        선택해주세요
      </h2>
      <SelectBoxesWrapper>
        <ContinentList />
        {continentId !== 0 && <CountryList />}
        {countryId !== 0 && <CityList />}
      </SelectBoxesWrapper>
    </>
  )
}

const SelectBoxesWrapper = styled.div`
  width: 37.5rem;
  height: 10.9375rem;

  display: flex;
  margin-bottom: 1.875rem;
`
