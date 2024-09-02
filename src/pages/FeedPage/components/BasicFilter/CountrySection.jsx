import React, { useState } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import useKyQuery from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'
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
  const { isLoading, data, isError } = useKyQuery(
    `countries/${country.id}/cities`,
    null,
    ['countries/cities', country.id]
  )

  const handleRadioChange = () => {
    resetSelectedCity()
    setSelectedCountry({
      ...country,
      cities: data.data,
    })
  }

  if (isLoading || isError) return null

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

function CountryArray({ regionId }) {
  const { isLoading, data, isError } = useKyQuery(
    `regions/${regionId}/countries`,
    null,
    ['regions/countries', regionId]
  )

  if (isLoading)
    return <SubTitle className="empty">불러오는 중입니다.</SubTitle>

  if (isError)
    return <SubTitle className="empty">로딩에 실패했습니다.</SubTitle>

  if (!data.data.length)
    return <SubTitle className="empty">나라가 없습니다.</SubTitle>

  return data.data.map((country) => (
    <SelectWrapper key={country.id}>
      <CountryRadio country={country} />
    </SelectWrapper>
  ))
}

CountryArray.propTypes = {
  regionId: PropTypes.number.isRequired,
}

function RegionCollapse({ region }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRegion = () => setIsOpen((prev) => !prev)

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
          <CountryArray regionId={region.id} />
        </SelectContainer>
      )}
    </>
  )
}

RegionCollapse.propTypes = {
  region: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function RegionArray() {
  const { isLoading, data, isError } = useKyQuery('regions')

  if (isLoading)
    return <SubTitle className="empty">불러오는 중입니다.</SubTitle>

  if (isError)
    return <SubTitle className="empty">로딩에 실패했습니다.</SubTitle>

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
