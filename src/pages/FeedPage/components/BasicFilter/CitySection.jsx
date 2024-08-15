import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import useFeedStore from '../../stores/useFeedStore'
// import useKy from '../../../../hooks/useKy'
import {
  SectionContainer,
  SelectContainer,
  SelectWrapper,
  SubTitle,
} from './BasicFilter.style'

function CityCheckBox({ city }) {
  const selectedCity = useFeedStore((state) => state.selectedCity)
  const setSelectedCity = useFeedStore((state) => state.setSelectedCity)

  const handleCheckboxChange = () => {
    if (selectedCity.some((selected) => selected.id === city.cityId)) {
      setSelectedCity(
        selectedCity.filter((selected) => selected.id !== city.cityId)
      )
    } else {
      setSelectedCity([...selectedCity, { id: city.cityId, name: city.name }])
    }
  }

  return (
    <SelectWrapper>
      <Checkbox
        checked={selectedCity.some((selected) => selected.id === city.cityId)}
        onChange={handleCheckboxChange}
      >
        {city.name}
      </Checkbox>
    </SelectWrapper>
  )
}

CityCheckBox.propTypes = {
  city: PropTypes.shape({
    cityId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CityContainer() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)
  const [cities, setCities] = useState([])

  useEffect(() => {
    const fetchCities = (id) => {
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
    }

    if (selectedCountry?.id) fetchCities(selectedCountry.id)
  }, [selectedCountry])

  if (!selectedCountry?.id)
    return (
      <SelectContainer>
        <SubTitle className="empty">국가를 선택하세요.</SubTitle>
      </SelectContainer>
    )

  if (cities.length === 0)
    return (
      <SelectContainer>
        <SubTitle className="empty">도시가 없습니다.</SubTitle>
      </SelectContainer>
    )

  return (
    <SelectContainer>
      {cities.map((city) => (
        <CityCheckBox
          key={city.cityId}
          city={city}
        />
      ))}
    </SelectContainer>
  )
}

function CitySection() {
  return (
    <SectionContainer>
      <div className="title">도시</div>
      <CityContainer />
    </SectionContainer>
  )
}

export default CitySection
