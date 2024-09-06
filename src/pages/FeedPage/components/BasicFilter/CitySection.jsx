import React from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import {
  SectionContainer,
  SelectContainer,
  SelectWrapper,
  SubTitle,
} from './BasicFilter.style'

function CityCheckBox({ city }) {
  const selectedCity = useFeedStore((state) => state.selectedCity)
  const [addSelectedCity, deleteSelectedCity] = useFeedStore((state) => [
    state.addSelectedCity,
    state.deleteSelectedCity,
  ])

  const cityInSelected = inArray(selectedCity, city.id)

  const handleCheckboxChange = () => {
    if (cityInSelected) deleteSelectedCity(city.id)
    else addSelectedCity({ id: city.id, name: city.name })
  }

  return (
    <Checkbox
      id={city.id}
      name={city.name}
      checked={cityInSelected}
      onChange={handleCheckboxChange}
    >
      {city.name}
    </Checkbox>
  )
}

CityCheckBox.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CityArray({ cities }) {
  if (!cities.length)
    return <SubTitle className="empty">도시가 없습니다.</SubTitle>

  return cities.map((city) => (
    <SelectWrapper key={city.id}>
      <CityCheckBox city={city} />
    </SelectWrapper>
  ))
}

CityArray.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

function CitySection() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)

  return (
    <SectionContainer>
      <div className="title">도시</div>
      <SelectContainer>
        {!Object.keys(selectedCountry).length ? (
          <SubTitle className="empty">국가를 선택하세요.</SubTitle>
        ) : (
          <CityArray cities={selectedCountry.cities} />
        )}
      </SelectContainer>
    </SectionContainer>
  )
}

export default CitySection
