import React from 'react'
import { InputNumber, ConfigProvider } from 'antd'
import CurrencyList from './CurrencyList'
import useFormStore from '../../../../stores/useFormStore'
import theme from '../../../../styles/theme'

export default function NumberInputForm() {
  const price = useFormStore((state) => state.price)
  const setFormContents = useFormStore((state) => state.setFormContents)

  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: { fontSizeLG: 14 },
        },
        token: {
          controlHeight: 29,
          fontFamily: theme.style.mainBold,
        },
      }}
    >
      <InputNumber
        min={0}
        max={10000000}
        defaultValue={price}
        addonBefore={<CurrencyList />}
        size="large"
        onChange={(num) => {
          setFormContents({ price: num === null ? 0 : num })
        }}
      />
    </ConfigProvider>
  )
}
