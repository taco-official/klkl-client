import React, { useState, useCallback, useEffect } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import useSelectedCountry from '../../hooks/useSelectedCountry'
import useSelectedCity from '../../hooks/useSelectedCity'
import {
  SectionContainer,
  Title,
  CheckboxContainer,
  CheckboxWrapper,
} from './BasicFilter.style'

function CityCheckBox({ city }) {
  const { selectedCity, setSelectedCity } = useSelectedCity()

  const handleCheckboxChange = useCallback(() => {
    if (selectedCity.some((selected) => selected.id === city.cityId)) {
      setSelectedCity(
        selectedCity.filter((selected) => selected.id !== city.cityId)
      )
    } else {
      setSelectedCity([...selectedCity, { id: city.cityId, name: city.name }])
    }
  }, [selectedCity, setSelectedCity, city])

  useEffect(() => {
    console.log('selectedCity', selectedCity)
  }, [selectedCity])

  return (
    <CheckboxWrapper>
      <Checkbox
        checked={selectedCity.some((selected) => selected.id === city.cityId)}
        onChange={handleCheckboxChange}
      >
        {city.name}
      </Checkbox>
    </CheckboxWrapper>
  )
}

CityCheckBox.propTypes = {
  city: PropTypes.shape({
    cityId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CityContainer() {
  const { selectedCountry } = useSelectedCountry()
  const [cities, setCities] = useState([])

  const fetchCities = useCallback((id) => {
    const citiesData = {
      1100: {
        data: [
          {
            cityId: 1110,
            name: '활성화된 도시 1-1',
          },
          {
            cityId: 1120,
            name: '활성화된 도시 1-2',
          },
        ],
      },
      1200: {
        data: [
          {
            cityId: 1210,
            name: '활성화된 도시 2-1',
          },
          {
            cityId: 1220,
            name: '활성화된 도시 2-2',
          },
        ],
      },
      1300: {
        data: [],
      },
    }
    setCities(citiesData[id] ? citiesData[id].data : [])
  }, [])

  useEffect(() => {
    if (selectedCountry && selectedCountry.id) fetchCities(selectedCountry.id)
  }, [selectedCountry, fetchCities])

  if (!selectedCountry || !selectedCountry.id)
    return <CheckboxContainer>국가를 선택하세요.</CheckboxContainer>
  if (cities.length === 0)
    return <CheckboxContainer>도시가 없습니다.</CheckboxContainer>

  return (
    <CheckboxContainer>
      {cities.map((city) => (
        <CityCheckBox
          key={city.cityId}
          city={city}
        />
      ))}
    </CheckboxContainer>
  )
}

function CitySection() {
  return (
    <SectionContainer>
      <Title>도시</Title>
      <CityContainer />
    </SectionContainer>
  )
}

export default CitySection
