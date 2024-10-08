import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import theme from '@styles/theme'
import kyMethod from '@constants/kyMethod'
import kyInstance from '@utils/kyInstance'
import uploadToS3 from '@utils/uploadToS3'
import useLoginStore from '@stores/useLoginStore'
import useUserStore from '@stores/useUserStore'
import useKyMutation from '@hooks/useKyMutation'

const useEditProfile = () => {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { mutateAsync } = useKyMutation(kyMethod.PUT, 'me')
  const loginData = useLoginStore((state) => state.loginData)
  const body = useUserStore((state) => ({
    name: state.name || loginData.name,
    description: state.description || '',
  }))
  const profileFile = useUserStore((state) => state.profileFile)
  const resetUserData = useUserStore((state) => state.resetUserData)

  const editProfile = async () => {
    setLoading(true)
    try {
      if (profileFile) {
        const { data } = await kyInstance
          .post('me/upload-url', {
            body: JSON.stringify({
              fileExtension: profileFile.type.split('/')[1],
            }),
          })
          .json()

        await uploadToS3([data], [profileFile])

        await kyInstance.post('me/upload-complete', {
          body: JSON.stringify({ imageId: data.id }),
        })
      }

      await mutateAsync(JSON.stringify(body))
      navigate('/me')
      resetUserData()
    } catch (error) {
      console.error(error)
      alert('다시 시도해 주세요')
    } finally {
      setLoading(false)
    }
  }

  return { editProfile, isLoading }
}

function SaveButton() {
  const { editProfile, isLoading } = useEditProfile()

  return (
    <CustomButton
      onClick={editProfile}
      loading={isLoading}
    >
      저장
    </CustomButton>
  )
}

const CustomButton = styled(Button).attrs({ type: 'text' })`
  font-family: ${theme.style.mainBold};
  border: 1px solid ${theme.color.lineGrey};
  width: 7.5rem;
`

export default SaveButton
