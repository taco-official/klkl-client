import React, { useState, useEffect } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import { useKyQuery } from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'
import ShowHideButton from '../../../../components/Button/ShowHideButton'
import theme from '../../../../styles/theme'
import {
  SectionContainer,
  RegionContainer,
  SubTitle,
  RegionBox,
  SelectContainer,
  SelectWrapper,
} from './BasicFilter.style'

function CountryRadio({ country }) {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)
  const [setSelectedCountry, resetSelectedCity] = useFeedStore((state) => [
    state.setSelectedCountry,
    state.resetSelectedCity,
  ])
  const {
    isLoading,
    data: citiesData,
    isError,
  } = useKyQuery(`countries/${country.id}/cities`, null, [
    'countries/cities',
    country.id,
  ])

  const handleRadioChange = () => {
    resetSelectedCity()
    setSelectedCountry({
      ...country,
      cities: citiesData.data,
    })
  }

  if (isLoading || isError) return null

  return (
    <SelectWrapper>
      <Radio
        checked={selectedCountry.id === country.id}
        onChange={handleRadioChange}
      >
        {country.name}
      </Radio>
    </SelectWrapper>
  )
}

CountryRadio.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CountryRadioArray({ regionId }) {
  const [countries, setCountries] = useState([])
  const {
    isLoading,
    data: countriesData,
    isError,
  } = useKyQuery(`regions/${regionId}/countries`, null, [
    'regions/countries',
    regionId,
  ])

  useEffect(() => {
    if (!isLoading && !isError && countriesData)
      setCountries(
        countriesData.data.map((country) => ({
          id: country.id,
          name: country.name,
        }))
      )
  }, [isLoading, isError, countriesData])

  if (isLoading)
    return (
      <SelectContainer>
        <SubTitle className="empty">불러오는 중입니다.</SubTitle>
      </SelectContainer>
    )

  if (isError)
    return (
      <SelectContainer>
        <SubTitle className="empty">로딩에 실패했습니다.</SubTitle>
      </SelectContainer>
    )

  if (!countries.length)
    return (
      <SelectContainer>
        <SubTitle className="empty">나라가 없습니다.</SubTitle>
      </SelectContainer>
    )

  return (
    <SelectContainer>
      {countries.map((country) => (
        <CountryRadio
          key={country.id}
          country={country}
        />
      ))}
    </SelectContainer>
  )
}

CountryRadioArray.propTypes = {
  regionId: PropTypes.number.isRequired,
}

function RegionCollapse() {
  const [regions, setRegions] = useState([])
  const [isOpen, setIsOpen] = useState({})
  const { isLoading, data: regionsData, isError } = useKyQuery('regions')

  useEffect(() => {
    if (!isLoading && !isError && regionsData) {
      setRegions(
        regionsData.data.map((region) => ({
          id: region.id,
          name: region.name,
        }))
      )
      const initializeOpenState = regionsData.data.reduce((acc, region) => {
        acc[region.id] = false
        return acc
      }, {})

      setIsOpen(initializeOpenState)
    }
  }, [isLoading, isError, regionsData])

  if (isLoading)
    return (
      <RegionContainer>
        <SubTitle className="empty">불러오는 중입니다.</SubTitle>
      </RegionContainer>
    )

  if (isError)
    return (
      <RegionContainer>
        <SubTitle className="empty">로딩에 실패했습니다.</SubTitle>
      </RegionContainer>
    )

  if (!regions.length)
    return (
      <RegionContainer>
        <SubTitle className="empty">지역이 없습니다.</SubTitle>
      </RegionContainer>
    )

  const updateIsOpen = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <RegionContainer>
      {regions.map((region) => (
        <RegionBox key={region.id}>
          <SubTitle className="region">
            <div className="region">{region.name}</div>
            <ShowHideButton
              handleClick={() => updateIsOpen(region.id)}
              iconColor={theme.color.lineGrey}
              isOption={isOpen[region.id]}
            />
          </SubTitle>
          {isOpen[region.id] && <CountryRadioArray regionId={region.id} />}
        </RegionBox>
      ))}
    </RegionContainer>
  )
}

function CountrySection() {
  return (
    <SectionContainer>
      <div className="title">국가</div>
      <RegionCollapse />
    </SectionContainer>
  )
}

export default CountrySection
