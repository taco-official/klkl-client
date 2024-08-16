import React from 'react'
import { Button } from 'antd'
import { GrPowerReset } from 'react-icons/gr'
import useFeedStore from '../../../../stores/useFeedStore'

function ResetButton() {
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)

  return (
    <Button
      type="text"
      size="small"
      icon={<GrPowerReset />}
      onClick={resetSelectedField}
    >
      초기화
    </Button>
  )
}

export default ResetButton
