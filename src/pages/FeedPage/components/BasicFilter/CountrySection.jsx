import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import useKyQuery from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import ShowHideButton from '../../../../components/Button/ShowHideButton'
import theme from '../../../../styles/theme'
import {
  SectionContainer,
  RegionContainer,
  SelectContainer,
  SelectWrapper,
  SubTitle,
} from './BasicFilter.style'

function CountryRadio({ country }) {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)
  const [setSelectedCountry, resetSelectedCity] = useFeedStore((state) => [
    state.setSelectedCountry,
    state.resetSelectedCity,
  ])

  const handleRadioChange = () => {
    resetSelectedCity()
    setSelectedCountry(country)
  }

  return (
    <Radio
      id={country.id}
      name={country.name}
      checked={selectedCountry.id === country.id}
      onChange={handleRadioChange}
    >
      {country.name}
    </Radio>
  )
}

CountryRadio.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

function CountryArray({ countries }) {
  if (!countries.length)
    return <SubTitle className="empty">나라가 없습니다.</SubTitle>

  return countries.map((country) => (
    <SelectWrapper key={country.id}>
      <CountryRadio country={country} />
    </SelectWrapper>
  ))
}

CountryArray.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cities: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

function RegionCollapse({ region, defaultOpenId = undefined }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRegion = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    setIsOpen(region.id === defaultOpenId)
  }, [defaultOpenId])

  return (
    <>
      <SubTitle className="region">
        <div className="region">{region.name}</div>
        <ShowHideButton
          handleClick={toggleRegion}
          iconColor={theme.color.lineGrey}
          isOption={isOpen}
        />
      </SubTitle>
      {isOpen && (
        <SelectContainer>
          <CountryArray countries={region.countries} />
        </SelectContainer>
      )}
    </>
  )
}

RegionCollapse.propTypes = {
  region: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cities: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
  defaultOpenId: PropTypes.number,
}

function RegionArray() {
  const { isLoading, data, isError } = useKyQuery('regions', null, undefined, {
    gcTime: 24 * 60 * 60 * 1000,
    staleTime: 24 * 60 * 60 * 1000,
  })
  const location = useLocation()
  const { selectedCountry, selectedCity } = useFeedStore(
    useShallow((state) => ({
      selectedCountry: state.selectedCountry,
      selectedCity: state.selectedCity,
    }))
  )
  const { setSelectedCountry, addSelectedCity } = useFeedStore((state) => ({
    setSelectedCountry: state.setSelectedCountry,
    addSelectedCity: state.addSelectedCity,
  }))
  const [defaultOpenRegion, setDefaultOpenRegion] = useState(undefined)

  useEffect(() => {
    if (location.state?.data && !isLoading && !isError && data) {
      if (location.state.data.countries.length) {
        const searchedCountry = location.state.data.countries[0]
        data.data.find((region) => {
          if (inArray(region.countries, searchedCountry.id)) {
            setSelectedCountry(searchedCountry)
            if (region.id !== defaultOpenRegion) setDefaultOpenRegion(region.id)
            return true
          }
          return false
        })
      }

      if (location.state.data.cities.length) {
        const searchedCity = location.state.data.cities[0]
        data.data.find((region) =>
          region.countries.find((country) => {
            if (inArray(country.cities, searchedCity.id)) {
              if (!inArray(selectedCity, searchedCity.id))
                addSelectedCity(searchedCity)
              if (!('id' in selectedCountry)) setSelectedCountry(country)
              if (region.id !== defaultOpenRegion)
                setDefaultOpenRegion(region.id)
              return true
            }
            return false
          })
        )
      }
    }
  }, [isLoading, isError, data])

  if (isLoading)
    return <SubTitle className="empty">불러오는 중입니다.</SubTitle>

  if (isError)
    return <SubTitle className="empty">로딩에 실패했습니다.</SubTitle>

  if (!data.data.length)
    return <SubTitle className="empty">지역이 없습니다.</SubTitle>

  return data.data.map((region) => (
    <SelectWrapper key={region.id}>
      <RegionCollapse
        region={region}
        defaultOpenId={defaultOpenRegion}
      />
    </SelectWrapper>
  ))
}

function CountrySection() {
  return (
    <SectionContainer>
      <div className="title">국가</div>
      <RegionContainer>
        <RegionArray />
      </RegionContainer>
    </SectionContainer>
  )
}

export default CountrySection
