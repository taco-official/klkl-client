import React from 'react'
import { ConfigProvider, Button } from 'antd'
import { GrPowerReset } from 'react-icons/gr'
import useFeedStore from '../../../../stores/useFeedStore'
import { tagTheme } from '../../FeedPage.style'

function ResetButton() {
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)

  return (
    <ConfigProvider theme={tagTheme}>
      <Button
        type="text"
        size="small"
        icon={<GrPowerReset />}
        onClick={resetSelectedField}
      >
        초기화
      </Button>
    </ConfigProvider>
  )
}

export default ResetButton
