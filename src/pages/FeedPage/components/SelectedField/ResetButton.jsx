import React from 'react'
import { ConfigProvider, Button } from 'antd'
import { GrPowerReset } from 'react-icons/gr'
import useFeedStore from '@stores/useFeedStore'
import { buttonTheme } from '../../FeedPage.style'

function ResetButton() {
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)

  return (
    <ConfigProvider theme={buttonTheme}>
      <Button
        type="text"
        size="small"
        onClick={resetSelectedField}
      >
        <div
          style={{
            display: 'flex',
            columnGap: '0.3rem',
            alignItems: 'center',
          }}
        >
          <GrPowerReset />
          <div>초기화</div>
        </div>
      </Button>
    </ConfigProvider>
  )
}

export default ResetButton
