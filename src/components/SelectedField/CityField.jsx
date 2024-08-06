import React, { useCallback } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedCountry from '../../hooks/useSelectedCountry'
import useSelectedCity from '../../hooks/useSelectedCity'
import { BlueTag, WhiteTag } from '../tag/Tags.style'

function CityField() {
  const { selectedCountry } = useSelectedCountry()
  const { selectedCity, setSelectedCity } = useSelectedCity()

  const deleteCity = useCallback(
    (id) => {
      setSelectedCity((current) => current.filter((city) => city.id !== id))
    },
    [setSelectedCity]
  )

  if (Object.keys(selectedCountry).length === 0)
    return (
      <WhiteTag>
        <span>국가 전체</span>
      </WhiteTag>
    )

  if (selectedCity.length === 0)
    return (
      <WhiteTag>
        <span>{selectedCountry.name} 전체</span>
      </WhiteTag>
    )

  return selectedCity.map((city) => (
    <BlueTag key={city.id}>
      <span>{city.name}</span>
      <CloseOutlined onClick={() => deleteCity(city.id)} />
    </BlueTag>
  ))
}

export default CityField
