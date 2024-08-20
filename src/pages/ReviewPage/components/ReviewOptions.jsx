import React from 'react'
import styled from 'styled-components'
import { Dropdown, Modal } from 'antd'

import { kyInstance } from '../../../hooks/useKyQuery'
import Icons from '../../../components/Icons/Icons'
import theme from '../../../styles/theme'

const DeleteModal = () => {
  return Modal.confirm({
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
    style: { fontFamily: theme.style.mainBold },
    onOk: async () => {
      try {
        await kyInstance.delete(window.location.pathname.slice(1))
      } catch (error) {
        console.log(error)
      }

      window.history.back()
    },
  })
}

function ReviewOptions() {
  const options = [
    {
      key: '1',
      label: (
        <div
          aria-hidden
          onClick={{}}
          type="button"
        >
          수정
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          aria-hidden
          type="button"
          onClick={DeleteModal}
          style={{ color: 'red' }}
        >
          삭제
        </div>
      ),
    },
  ]

  return (
    <CustomDropdown
      placement="bottomLeft"
      arrow={false}
      menu={{
        items: options,
      }}
      trigger={['click']}
    >
      <Icons>more_vert</Icons>
    </CustomDropdown>
  )
}

const CustomDropdown = styled(Dropdown)`
  margin: 0 2px;
  border-radius: 35%;
  font-size: 1.3em;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

export default ReviewOptions
