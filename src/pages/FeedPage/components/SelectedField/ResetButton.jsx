import React from 'react'
import { Button } from 'antd'
import { GrPowerReset } from 'react-icons/gr'
import useFeedStore from '../../stores/useFeedStore'

function ResetButton() {
  const setSelectedCountry = useFeedStore((state) => state.setSelectedCountry)
  const setSelectedCity = useFeedStore((state) => state.setSelectedCity)
  const setSelectedCategory = useFeedStore((state) => state.setSelectedCategory)
  const setSelectedSubCategory = useFeedStore(
    (state) => state.setSelectedSubCategory
  )
  const setSelectedFilter = useFeedStore((state) => state.setSelectedFilter)

  const handleClick = () => {
    setSelectedFilter([])
    setSelectedSubCategory([])
    setSelectedCategory([])
    setSelectedCity([])
    setSelectedCountry({})
  }

  return (
    <Button
      type="text"
      size="small"
      icon={<GrPowerReset />}
      onClick={handleClick}
    >
      초기화
    </Button>
  )
}

export default ResetButton
