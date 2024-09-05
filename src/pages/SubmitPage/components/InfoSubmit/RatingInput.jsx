import React from 'react'
import { Rate } from 'antd'
import useFormStore from '../../../../stores/useFormStore'

export default function InfoSubmitForm() {
  const rating = useFormStore((state) => state.rating)
  const setFormContents = useFormStore((state) => state.setFormContents)

  return (
    <Rate
      allowHalf
      defaultValue={rating}
      style={{ color: '#FFD700' }}
      onChange={(num) => setFormContents({ rating: num })}
    />
  )
}
