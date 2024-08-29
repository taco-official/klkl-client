import React from 'react'
import { Select, ConfigProvider } from 'antd'
import useFormStore from '../../../../stores/useFormStore'
import useKyQuery from '../../../../hooks/useKyQuery'

export default function NumberInputForm() {
  const currencyId = useFormStore((state) => state.currencyId)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const {
    data: currencies,
    isLoading,
    isError,
    error,
  } = useKyQuery('currencies')

  if (isError) return <div>{error}</div>
  if (isLoading) return <div>loading</div>

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 13.5,
        },
      }}
    >
      <Select
        defaultValue={currencyId}
        onSelect={(value) => setFormContents({ currencyId: value })}
        style={{ width: '90px' }}
        options={currencies?.data.map((currency) => ({
          value: currency.id,
          label: (
            <div>
              <img
                src={currency.flag}
                style={{ width: '20px' }}
              />
              {currency.code}
            </div>
          ),
        }))}
      />
    </ConfigProvider>
  )
}
