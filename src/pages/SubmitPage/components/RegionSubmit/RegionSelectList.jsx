import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import useFormStore from '@stores/useFormStore'
import SelectionList from './SelectionList'

const useRegionState = () => {
  const [region, country, city] = useFormStore(
    useShallow((state) => [state.region, state.country, state.city])
  )

  return [region, country, city]
}

const useRegionSetter = () => {
  const setFormContents = useFormStore((state) => state.setFormContents)

  const setContinent = (region) =>
    setFormContents({ region, country: undefined, city: undefined })
  const setCountry = (country) => setFormContents({ country, city: undefined })
  const setCity = (city) => setFormContents({ city })

  return [setContinent, setCountry, setCity]
}

function RegionSelectList({ regions }) {
  const [region, country, city] = useRegionState()
  const [setContinent, setCountry, setCity] = useRegionSetter()

  return (
    <>
      <h2>
        구매 지역을
        <br />
        선택해주세요
      </h2>
      <SelectBoxesWrapper>
        <SelectionList
          optionList={regions}
          optionState={region?.id}
          setOptionState={setContinent}
          $width={`${100 / 3}%`}
        />
        {region && (
          <SelectionList
            optionList={region.countries}
            optionState={country?.id}
            setOptionState={setCountry}
            $width={`${100 / 3}%`}
          />
        )}
        {country && (
          <SelectionList
            optionList={country.cities}
            optionState={city?.id}
            setOptionState={setCity}
            $width={`${100 / 3}%`}
          />
        )}
      </SelectBoxesWrapper>
    </>
  )
}

RegionSelectList.propTypes = {
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

const SelectBoxesWrapper = styled.div`
  width: 37.5rem;
  height: 10.9375rem;

  display: flex;
  margin-bottom: 1.875rem;
`

export default RegionSelectList
