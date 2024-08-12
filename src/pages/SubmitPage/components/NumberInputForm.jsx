import React from 'react'
import { InputNumber, Select, ConfigProvider } from 'antd'
import useReviewStore from '../stores/useReviewStore'
import theme from '../../../styles/theme'

const { Option } = Select

export default function NumberInputForm() {
  const [currencyId, price] = useReviewStore((state) => [
    state.currencyId,
    state.price,
  ])

  const setReviewStates = useReviewStore((state) => state.setReviewContents)
  const currencyMap = { 0: '$', 1: '€', 2: '£', 3: '¥' }

  const selectBefore = (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 12,
        },
      }}
    >
      <Select
        defaultValue={currencyId}
        onSelect={(value) => setReviewStates({ currencyId: value })}
      >
        <Option value={0}>USD</Option>
        <Option value={1}>EUR</Option>
        <Option value={2}>GBP</Option>
        <Option value={3}>CNY</Option>
      </Select>
    </ConfigProvider>
  )

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
        prefix={currencyMap[currencyId]}
        defaultValue={price}
        addonBefore={selectBefore}
        size="large"
        onChange={(num) => setReviewStates({ price: num })}
      />
    </ConfigProvider>
  )
}
