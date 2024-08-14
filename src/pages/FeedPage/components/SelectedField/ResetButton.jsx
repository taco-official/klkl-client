import React, { useCallback } from 'react'
import { Button } from 'antd'
import { GrPowerReset } from 'react-icons/gr'
import useSelectedCountry from '../../../../hooks/useSelectedCountry'
import useSelectedCity from '../../../../hooks/useSelectedCity'
import useSelectedCategory from '../../../../hooks/useSelectedCategory'
import useSelectedSubCategory from '../../../../hooks/useSelectedSubCategory'
import useSelectedFilter from '../../../../hooks/useSelectedFilter'

function ResetButton() {
  const { setSelectedCountry } = useSelectedCountry()
  const { setSelectedCity } = useSelectedCity()
  const { setSelectedCategory } = useSelectedCategory()
  const { setSelectedSubCategory } = useSelectedSubCategory()
  const { setSelectedFilter } = useSelectedFilter()

  const handleClick = useCallback(() => {
    setSelectedFilter([])
    setSelectedSubCategory([])
    setSelectedCategory([])
    setSelectedCity([])
    setSelectedCountry({})
  }, [])

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
