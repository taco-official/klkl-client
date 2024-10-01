import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dropdown } from 'antd'

import Icons from '../Icons/Icons'
import theme from '@styles/theme'

function OptionDropdown({ editOnclick, deleteOnclick }) {
  const items = [
    {
      key: '1',
      label: (
        <div
          aria-hidden
          onClick={editOnclick}
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
          onClick={deleteOnclick}
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
        items,
        style: { fontFamily: theme.style.mainBold },
      }}
      trigger={['click']}
    >
      <Icons>more_vert</Icons>
    </CustomDropdown>
  )
}
OptionDropdown.propTypes = {
  editOnclick: PropTypes.func.isRequired,
  deleteOnclick: PropTypes.func.isRequired,
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

export default OptionDropdown
