import React from 'react'
import { Input } from 'antd'
import useFormStore from '@stores/useFormStore'
import theme from '@styles/theme'

function NameInput() {
  const name = useFormStore((state) => state.name)
  const setFormContents = useFormStore((state) => state.setFormContents)

  return (
    <Input
      showCount
      maxLength={50}
      defaultValue={name}
      placeholder="상품명을 입력해주세요"
      onChange={(e) => setFormContents({ name: e.target.value.trim() })}
      style={{ fontSize: theme.size.textSM }}
      size="large"
    />
  )
}

export default NameInput
