import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import { Radio } from 'antd'
import useFeedStore from '@stores/useFeedStore'
import CollapseButton from '@components/Button/CollapseButton'
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
    })
  ).isRequired,
}

function RegionCollapse({ region }) {
  const [isOpen, setIsOpen] = useState(false)
  const defaultOpenRegion = useFeedStore((state) => state.defaultOpenRegion)

  useEffect(() => {
    setIsOpen(region.id === defaultOpenRegion)
  }, [defaultOpenRegion])

  return (
    <>
      <SubTitle className="region">
        <div className="region">{region.name}</div>
        <CollapseButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
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
    countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

function RegionArray() {
  const { regionData: data } = useLoaderData()

  if (!data) return <div className="empty">불러오는 중입니다.</div>

  if (!data.data.length)
    return <SubTitle className="empty">지역이 없습니다.</SubTitle>

  return data.data.map((region) => (
    <SelectWrapper key={region.id}>
      <RegionCollapse region={region} />
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
