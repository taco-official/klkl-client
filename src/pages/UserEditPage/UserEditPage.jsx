import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import theme from '@styles/theme'
import useLoginStore from '@stores/useLoginStore'
import useCheckAuth from '@hooks/useCheckAuth'
import ProfileEditBlock from './ProfileEditBlock'
import NicknameInput from './NicknameInput'
import DescriptionInput from './DescriptionInput'
import SaveButton from './SaveButton'

function UserEditPage() {
  useCheckAuth()
  const loginData = useLoginStore((state) => state.loginData)

  return (
    <UserEditPageWrapper>
      <h1>프로필 수정</h1>
      <Divider />
      <ProfileEditBlock name={loginData?.name} />
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

export default UserEditPage
