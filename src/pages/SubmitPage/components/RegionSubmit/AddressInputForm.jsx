import React from 'react'
import styled from 'styled-components'
import { useShallow } from 'zustand/react/shallow'
import { Input } from 'antd'
import theme from '@styles/theme'
import useFormStore from '@stores/useFormStore'

export default function AddressInputForm() {
  const [city, address, setAddress] = useFormStore(
    useShallow((state) => [state.city, state.address, state.setFormContents])
  )

  if (!city) return null

  return (
    <>
      <h2>
        구매 주소를
        <br />
        입력해주세요
      </h2>
      <CustomInput
        maxLength={50}
        size="large"
        defaultValue={address}
        placeholder="주소입력"
        style={{ width: '37.5rem' }}
        onChange={(e) => setAddress({ address: e.target.value })}
      />
    </>
  )
}

const CustomInput = styled(Input)`
  font-size: ${theme.size.textSM};
  font-family: ${theme.style.main};
  margin-bottom: 1.875rem;
`
