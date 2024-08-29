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

  const handleCheckboxChange = () => {
    if (inArray(selectedCity, city.id)) deleteSelectedCity(city.id)
    else addSelectedCity({ id: city.id, name: city.name })
  }

  return (
    <SelectWrapper>
      <Checkbox
        id={city.id}
        name={city.name}
        checked={inArray(selectedCity, city.id)}
        onChange={handleCheckboxChange}
      >
        {city.name}
      </Checkbox>
    </SelectWrapper>
  )
}

CityCheckBox.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CityContainer() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)

  if (!selectedCountry.cities.length)
    return (
      <SelectContainer>
        <SubTitle className="empty">도시가 없습니다.</SubTitle>
      </SelectContainer>
    )

  return (
    <SelectContainer>
      {selectedCountry.cities.map((city) => (
        <CityCheckBox
          key={city.id}
          city={city}
        />
      ))}
    </SelectContainer>
  )
}

function CitySection() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)

  return (
    <SectionContainer>
      <div className="title">도시</div>
      {!('id' in selectedCountry) ? (
        <SelectContainer>
          <SubTitle className="empty">국가를 선택하세요.</SubTitle>
        </SelectContainer>
      ) : (
        <CityContainer />
      )}
    </SectionContainer>
  )
}

export default CitySection
