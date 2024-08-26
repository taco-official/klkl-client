import React from 'react'
import { Modal } from 'antd'
import theme from '../../../styles/theme'

function DeleteButton() {
  return (
    <>
      <div
        aria-hidden
        onClick={{}}
        type="button"
      >
        수정
      </div>
      <Modal
        centered
        okText="삭제"
        cancelText="취소"
        okButtonProps={{ danger: true }}
        style={{ fontFamily: theme.style.mainBold }}
      >
        <div>
          <p>삭제한 리뷰는 복구할 수 없습니다</p>
          <p>삭제하시겠습니까?</p>
        </div>
      </Modal>
    </>
  )
}

export default DeleteButton
