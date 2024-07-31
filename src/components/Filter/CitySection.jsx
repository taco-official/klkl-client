import React, { useState, useCallback, useEffect } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import { useSelectedCountry, useSelectedCity } from './BasicFilterContext'
import { FilterContainer, SubTitle } from './BasicFilter.style'

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
    <Checkbox
      checked={selectedCity.some((selected) => selected.id === city.cityId)}
      onChange={handleCheckboxChange}
    >
      {city.name}
    </Checkbox>
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
    return <FilterContainer>국가를 선택하세요.</FilterContainer>
  if (cities.length === 0)
    return <FilterContainer>도시가 없습니다.</FilterContainer>

  return (
    <FilterContainer>
      {cities.map((city) => (
        <CityCheckBox
          key={city.cityId}
          city={city}
        />
      ))}
    </FilterContainer>
  )
}

function CitySection() {
  return (
    <div>
      <SubTitle>도시</SubTitle>
      <CityContainer />
    </div>
  )
}

export default CitySection
