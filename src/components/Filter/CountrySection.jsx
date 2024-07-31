import React, { useState, useCallback, useEffect, Fragment } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
// import useAxios from 'use-axios-client'
import { useSelectedCountry, useSelectedCity } from './BasicFilterContext'
import ShowHideButton from '../Button/ShowHideButton'
import {
  FilterContainer,
  SubTitle,
  RegionBox,
  CheckboxWrapper,
} from './BasicFilter.style'

function CountryBox({ country }) {
  const { selectedCountry, setSelectedCountry } = useSelectedCountry()
  const { setSelectedCity } = useSelectedCity()

  const handleCheckboxChange = useCallback(() => {
    if (selectedCountry && selectedCountry.id === country.countryId) {
      setSelectedCountry({})
    } else {
      setSelectedCountry({
        id: country.countryId,
        name: country.name,
      })
    }
    setSelectedCity([])
  }, [selectedCountry, setSelectedCountry, country])

  useEffect(() => {
    console.log('selectedCountry', selectedCountry)
  }, [selectedCountry])

  return (
    <Checkbox
      checked={selectedCountry && selectedCountry.id === country.countryId}
      onChange={handleCheckboxChange}
    >
      {country.name}
    </Checkbox>
  )
}

CountryBox.propTypes = {
  country: PropTypes.shape({
    countryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CountryCheckbox({ regionId }) {
  const [countries, setCountries] = useState([])

  const fetchCountries = useCallback((id) => {
    const countriesData = {
      1000: {
        data: [
          {
            countryId: 1100,
            name: '활성화된 국가 1',
          },
          {
            countryId: 1200,
            name: '활성화된 국가 2',
          },
          {
            countryId: 1300,
            name: '비활성화된 국가 1',
          },
        ],
      },
      2000: {
        data: [],
      },
      3000: {
        data: [],
      },
    }
    setCountries(countriesData[id] ? countriesData[id].data : [])
  }, [])

  useEffect(() => {
    fetchCountries(regionId)
  }, [regionId, fetchCountries])

  if (countries.length === 0) {
    return <CheckboxWrapper>나라가 없습니다.</CheckboxWrapper>
  }

  return (
    <CheckboxWrapper>
      {countries.map((country) => (
        <CountryBox
          key={country.countryId}
          country={country}
        />
      ))}
    </CheckboxWrapper>
  )
}

CountryCheckbox.propTypes = {
  regionId: PropTypes.number.isRequired,
}

function RegionCollapse() {
  const [isOpen, setIsOpen] = useState({})
  const [regions, setRegions] = useState([])

  useEffect(() => {
    const fetchRegions = () => {
      const regionsData = {
        data: [
          {
            regionId: 1000,
            name: '활성화된 지역',
          },
          {
            regionId: 2000,
            name: '비활성화된 지역',
          },
          {
            regionId: 3000,
            name: '비활성화된 지역',
          },
        ],
      }
      setRegions(regionsData.data)

      const initializeOpenState = regionsData.data.reduce((acc, region) => {
        acc[region.regionId] = false
        return acc
      }, {})
      setIsOpen(initializeOpenState)
    }
    fetchRegions()
  }, [])

  const updateElement = (key, value) => {
    setIsOpen((current) => ({
      ...current,
      [key]: value,
    }))
  }

  if (regions.length === 0) {
    return <FilterContainer>지역이 없습니다.</FilterContainer>
  }

  return (
    <FilterContainer>
      {regions.map((region) => (
        <Fragment key={region.regionId}>
          <RegionBox style={{ display: 'flex' }}>
            <div>{region.name}</div>
            <ShowHideButton
              handleClick={() =>
                updateElement(region.regionId, !isOpen[region.regionId])
              }
              isOption={isOpen[region.regionId]}
            />
          </RegionBox>
          {isOpen[region.regionId] && (
            <CountryCheckbox regionId={region.regionId} />
          )}
        </Fragment>
      ))}
    </FilterContainer>
  )
}

function CountrySection() {
  return (
    <div>
      <SubTitle>국가</SubTitle>
      <RegionCollapse />
    </div>
  )
}

export default CountrySection
