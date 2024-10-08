import React from 'react'
import { Input } from 'antd'
import theme from '@styles/theme'
import useFormStore from '@stores/useFormStore'

function DescriptionInput() {
  const description = useFormStore((state) => state.description)
  const setFormContents = useFormStore((state) => state.setFormContents)

  return (
    <Input.TextArea
      showCount
      maxLength={1000}
      defaultValue={description}
      placeholder="리뷰를 입력해 주세요"
      onChange={(e) => setFormContents({ description: e.target.value.trim() })}
      size="large"
      autoSize={{ minRows: 3 }}
      style={{ fontSize: theme.size.textSM }}
    />
  )
}

export default DescriptionInput
