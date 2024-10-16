import React from 'react'
import { useShallow } from 'zustand/react/shallow'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '@stores/useFeedStore'
import { BlueFieldTag, WhiteFieldTag } from '@components/Tags/Tags.style'

function CityField() {
  const [selectedCountry, selectedCity] = useFeedStore(
    useShallow((state) => [state.selectedCountry, state.selectedCity])
  )
  const [deleteSelectedCountry, deleteSelectedCity] = useFeedStore(
    useShallow((state) => [
      state.deleteSelectedCountry,
      state.deleteSelectedCity,
    ])
  )

  if (!Object.keys(selectedCountry).length)
    return (
      <WhiteFieldTag>
        <span>국가 전체</span>
      </WhiteFieldTag>
    )

  if (!selectedCity.length)
    return (
      <BlueFieldTag>
        <span>{selectedCountry.name} 전체</span>
        <CloseOutlined onClick={deleteSelectedCountry} />
      </BlueFieldTag>
    )

  return selectedCity.map((selected) => (
    <BlueFieldTag key={selected.id}>
      <span>{selected.name}</span>
      <CloseOutlined onClick={() => deleteSelectedCity(selected.id)} />
    </BlueFieldTag>
  ))
}

export default CityField
