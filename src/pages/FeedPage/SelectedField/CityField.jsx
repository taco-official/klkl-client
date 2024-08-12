import React, { useCallback } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedCountry from '../../../hooks/useSelectedCountry'
import useSelectedCity from '../../../hooks/useSelectedCity'
import {
  BlueFieldTag,
  WhiteFieldTag,
} from '../../../components/Tags/Tags.style'

function CityField() {
  const { selectedCountry, setSelectedCountry } = useSelectedCountry()
  const { selectedCity, setSelectedCity } = useSelectedCity()

  const deleteCountry = useCallback(() => {
    setSelectedCountry({})
  }, [selectedCity])

  const deleteCity = useCallback(
    (id) => {
      setSelectedCity((current) => current.filter((city) => city.id !== id))
    },
    [selectedCity]
  )

  if (Object.keys(selectedCountry).length === 0)
    return (
      <WhiteFieldTag>
        <span>국가 전체</span>
      </WhiteFieldTag>
    )

  if (selectedCity.length === 0)
    return (
      <BlueFieldTag>
        <span>{selectedCountry.name} 전체</span>
        <CloseOutlined onClick={() => deleteCountry()} />
      </BlueFieldTag>
    )

  return selectedCity.map((city) => (
    <BlueFieldTag key={city.id}>
      <span>{city.name}</span>
      <CloseOutlined onClick={() => deleteCity(city.id)} />
    </BlueFieldTag>
  ))
}

export default CityField
