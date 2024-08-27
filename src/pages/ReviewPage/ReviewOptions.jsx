import React from 'react'
import { Modal, notification } from 'antd'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'

import OptionDropdown from '../../components/OptionDropdown/OptionDropdown'
import { kyInstance } from '../../hooks/kyInstance'
import useFormStore from '../../stores/useFormStore'
import theme from '../../styles/theme'

function ReviewOptions({ review }) {
  const location = useLocation()
  const productURL = window.location.pathname.slice(1)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const navigate = useNavigate()

  const editReview = () => {
    setFormContents({
      name: review.name,
      description: review.description,
      address: review.address,
      price: review.price,
      rating: review.rating,
      currencyId: review.currency.id,
      tags: new Set(review.tags.map((tag) => tag.id)),
    })

    navigate('/submit', { state: { from: window.location.pathname } })
  }

  const deleteReview = () =>
    Modal.confirm({
      title: '리뷰 삭제',
      content: (
        <div>
          <p>삭제한 리뷰는 복구할 수 없습니다</p>
          <p>삭제하시겠습니까?</p>
        </div>
      ),
      centered: true,
      okText: '삭제',
      cancelText: '취소',
      okButtonProps: { danger: true },
      cancelButtonProps: { type: 'text' },
      style: { fontFamily: theme.style.main },
      onOk: async () => {
        try {
          await kyInstance.delete(productURL)
          notification.success({
            message: `삭제되었습니다`,
            duration: 1,
            placement: 'bottomLeft',
            style: {
              fontFamily: theme.style.main,
              width: '16.875rem',
            },
            closeIcon: false,
          })
          if (location.state.from !== '/submit') navigate(-1)
          else navigate('/')
        } catch (error) {
          console.error(error.response)
          window.alert('다시 시도해 주세요')
        }
      },
    })

  return (
    <OptionDropdown
      editOnclick={editReview}
      deleteOnclick={deleteReview}
    />
  )
}
ReviewOptions.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    currency: PropTypes.shape({
      id: PropTypes.number,
      code: PropTypes.string,
      flag: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
}

export default ReviewOptions
