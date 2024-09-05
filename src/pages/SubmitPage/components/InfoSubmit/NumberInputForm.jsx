import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { InputNumber, Select, ConfigProvider } from 'antd'

import useFormStore from '../../../../stores/useFormStore'
import theme from '../../../../styles/theme'

export default function NumberInputForm({ currencies }) {
  const price = useFormStore((state) => state.price)
  const currencyId = useFormStore((state) => state.currencyId)
  const setFormContents = useFormStore((state) => state.setFormContents)

  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: { fontSizeLG: 14 },
          Select: { fontSize: 12 },
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
        addonBefore={
          <Select
            defaultValue={currencyId}
            onSelect={(value) => setFormContents({ currencyId: value })}
            style={{ width: '90px', fontSize: '2px' }}
            options={currencies.map((currency) => ({
              value: currency.id,
              label: (
                <div>
                  <Flag src={currency.flagUrl} />
                  {currency.code}
                </div>
              ),
            }))}
          />
        }
        size="large"
        formatter={(value) =>
          `${value} ${currencies.find((currency) => currency.id === currencyId).unit}`
        }
        onChange={(num) => setFormContents({ price: num === null ? 0 : num })}
      />
    </ConfigProvider>
  )
}
NumberInputForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      code: PropTypes.string,
      unit: PropTypes.string,
      flagUrl: PropTypes.string,
    })
  ).isRequired,
}

const Flag = styled.img`
  width: 1rem;
  height: 10px;
  margin-right: 5px;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`
