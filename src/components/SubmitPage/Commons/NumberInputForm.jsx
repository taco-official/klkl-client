import React, { useState } from 'react'
import { InputNumber, Select, ConfigProvider } from 'antd'
import PropTypes from 'prop-types'
import theme from '../../../style/theme'

const { Option } = Select

export default function NumberInputForm({ setPrice, defaultValue }) {
  const [currency, setCurrency] = useState(1)
  const currencyMap = { 1: '$', 2: '€', 3: '£', 4: '¥' }

  const selectAfter = (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 12,
        },
      }}
    >
      <Select
        defaultValue={1}
        onSelect={(value) => setCurrency(value)}
      >
        <Option value={1}>USD</Option>
        <Option value={2}>EUR</Option>
        <Option value={3}>GBP</Option>
        <Option value={4}>CNY</Option>
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
        prefix={currencyMap[currency]}
        defaultValue={defaultValue}
        addonBefore={selectAfter}
        size="large"
        onChange={(num) => setPrice(num)}
      />
    </ConfigProvider>
  )
}
NumberInputForm.propTypes = {
  setPrice: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
}
