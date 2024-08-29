import React from 'react'
import styled from 'styled-components'
import { Divider, Button } from 'antd'
import theme from '../../styles/theme'

import DescriptionInput from './DescriptionInput'
import NicknameInput from './NicknameInput'
import ProfileEditBlock from './ProfileEditBlock'

function UserEditPage() {
  return (
    <UserEditPageWrapper>
      <h1>프로필 관리</h1>
      <Divider />
      <ProfileEditBlock />
      <div>
        <NicknameInput />
        <DescriptionInput />
      </div>
      <SaveButton>저장</SaveButton>
    </UserEditPageWrapper>
  )
}

const UserEditPageWrapper = styled.div`
  max-width: 43.75rem;
  min-width: 43.75rem;
  margin: 1.875rem auto;

  .ant-divider {
    margin: 1.25rem 0;
    border: 0.0625rem solid rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: ${theme.size.titleXL};
    font-family: ${theme.style.mainEB};
  }
`

const SaveButton = styled(Button).attrs({ type: 'text' })`
  font-family: ${theme.style.mainBold};
  border: 1px solid ${theme.color.lineGrey};
  width: 7.5rem;
`

export default UserEditPage
