import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../stores/useFeedStore'
import {
  BlueFieldTag,
  WhiteFieldTag,
} from '../../../../components/Tags/Tags.style'

function CityField() {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)
  const setSelectedCountry = useFeedStore((state) => state.setSelectedCountry)
  const selectedCity = useFeedStore((state) => state.selectedCity)
  const setSelectedCity = useFeedStore((state) => state.setSelectedCity)

  const deleteCountry = () => {
    setSelectedCountry({})
  }

  const deleteCity = (id) => {
    setSelectedCity(selectedCity.filter((selected) => selected.id !== id))
  }

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
        <CloseOutlined onClick={deleteCountry} />
      </BlueFieldTag>
    )

  return selectedCity.map((selected) => (
    <BlueFieldTag key={selected.id}>
      <span>{selected.name}</span>
      <CloseOutlined onClick={() => deleteCity(selected.id)} />
    </BlueFieldTag>
  ))
}

export default CityField
