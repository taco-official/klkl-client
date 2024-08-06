import React, { useState, useCallback, useEffect } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
// import useAxios from 'use-axios-client'
import useSelectedCountry from '../../hooks/useSelectedCountry'
import useSelectedCity from '../../hooks/useSelectedCity'
import ShowHideButton from '../Button/ShowHideButton'
import {
  SectionContainer,
  Title,
  RegionContainer,
  SubTitle,
  RegionBox,
  CheckboxContainer,
  CheckboxWrapper,
} from './BasicFilter.style'

function CountryBox({ country }) {
  const { selectedCountry, setSelectedCountry } = useSelectedCountry()
  const { setSelectedCity } = useSelectedCity()

  const handleCheckboxChange = useCallback(() => {
    setSelectedCountry({
      id: country.countryId,
      name: country.name,
    })
    setSelectedCity([])
  }, [selectedCountry, setSelectedCountry, country])

  useEffect(() => {
    console.log('selectedCountry', selectedCountry)
  }, [selectedCountry])

  return (
    <CheckboxWrapper>
      <Radio
        checked={selectedCountry.id === country.countryId}
        onChange={handleCheckboxChange}
      >
        {country.name}
      </Radio>
    </CheckboxWrapper>
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
    return <CheckboxContainer>나라가 없습니다.</CheckboxContainer>
  }

  return (
    <CheckboxContainer>
      {countries.map((country) => (
        <CountryBox
          key={country.countryId}
          country={country}
        />
      ))}
    </CheckboxContainer>
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
    return <RegionContainer>지역이 없습니다.</RegionContainer>
  }

  return (
    <RegionContainer>
      {regions.map((region) => (
        <RegionBox key={region.regionId}>
          <SubTitle>
            <div className="inBlock">{region.name}</div>
            <ShowHideButton
              handleClick={() =>
                updateElement(region.regionId, !isOpen[region.regionId])
              }
              isOption={isOpen[region.regionId]}
            />
          </SubTitle>
          {isOpen[region.regionId] && (
            <CountryCheckbox regionId={region.regionId} />
          )}
        </RegionBox>
      ))}
    </RegionContainer>
  )
}

function CountrySection() {
  return (
    <SectionContainer>
      <Title>국가</Title>
      <RegionCollapse />
    </SectionContainer>
  )
}

export default CountrySection
