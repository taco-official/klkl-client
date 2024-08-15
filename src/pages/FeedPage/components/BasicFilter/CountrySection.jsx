import React, { useState, useEffect } from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
// import useKy from '../../../../hooks/useKy'
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
  const setSelectedCountry = useFeedStore((state) => state.setSelectedCountry)
  const setSelectedCity = useFeedStore((state) => state.setSelectedCity)

  const handleRadioChange = () => {
    setSelectedCountry({
      id: country.countryId,
      name: country.name,
    })
    setSelectedCity([])
  }

  return (
    <SelectWrapper>
      <Radio
        checked={selectedCountry.id === country.countryId}
        onChange={handleRadioChange}
      >
        {country.name}
      </Radio>
    </SelectWrapper>
  )
}

CountryRadio.propTypes = {
  country: PropTypes.shape({
    countryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CountryRadioArray({ regionId }) {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = (id) => {
      const countriesData = {
        1000: {
          data: [
            {
              countryId: 1100,
              name: '일본',
            },
            {
              countryId: 1200,
              name: '중국',
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
    }

    fetchCountries(regionId)
  }, [regionId])

  if (countries.length === 0) {
    return (
      <SelectContainer>
        <SubTitle className="empty">나라가 없습니다.</SubTitle>
      </SelectContainer>
    )
  }

  return (
    <SelectContainer>
      {countries.map((country) => (
        <CountryRadio
          key={country.countryId}
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
    setIsOpen({
      ...isOpen,
      [key]: value,
    })
  }

  if (regions.length === 0) {
    return (
      <RegionContainer>
        <SubTitle className="empty">지역이 없습니다.</SubTitle>
      </RegionContainer>
    )
  }

  return (
    <RegionContainer>
      {regions.map((region) => (
        <RegionBox key={region.regionId}>
          <SubTitle className="region">
            <div className="region">{region.name}</div>
            <ShowHideButton
              handleClick={() =>
                updateElement(region.regionId, !isOpen[region.regionId])
              }
              iconColor={theme.color.lineGrey}
              isOption={isOpen[region.regionId]}
            />
          </SubTitle>
          {isOpen[region.regionId] && (
            <CountryRadioArray regionId={region.regionId} />
          )}
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
