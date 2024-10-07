import React from 'react'
import { Modal, notification } from 'antd'
import PropTypes from 'prop-types'

import { method } from '@hooks/kyInstance'
import useKyMutation from '@hooks/useKyMutation'
import OptionDropdown from '../OptionDropdown/OptionDropdown'
import theme from '@styles/theme'

function CommentOptions({ commentId, setEditMode }) {
  const productURL = window.location.pathname.slice(1)

  const { mutateAsync } = useKyMutation(
    method.DELETE,
    `${productURL}/comments/${commentId}`,
    [`${productURL}/comments`]
  )

  const deleteReview = () =>
    Modal.confirm({
      title: '댓글 삭제',
      content: <div>삭제하시겠습니까?</div>,
      centered: true,
      okText: '삭제',
      cancelText: '취소',
      okButtonProps: { danger: true },
      style: { fontFamily: theme.style.main },
      onOk: async () => {
        try {
          await mutateAsync()

          notification.success({
            message: `삭제되었습니다`,
            duration: 1,
            placement: 'bottomLeft',
            style: { fontFamily: theme.style.main, width: '16.875rem' },
            closeIcon: false,
          })
        } catch (error) {
          console.error(error.response)
          alert('다시 시도해 주세요')
        }
      },
    })

  return (
    <OptionDropdown
      editOnclick={setEditMode}
      deleteOnclick={deleteReview}
    />
  )
}
CommentOptions.propTypes = {
  commentId: PropTypes.number.isRequired,
  setEditMode: PropTypes.func.isRequired,
}

export default CommentOptions
