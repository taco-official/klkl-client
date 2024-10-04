import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import { kyInstance } from '@hooks/kyInstance'
import useKyMutation from '@hooks/useKyMutation'
import theme from '@styles/theme'
import useUserStore from '@stores/useUserStore'
import uploadeToS3 from '@utils/uploadToS3'

const useEditProfile = () => {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const body = useUserStore((state) => ({
    name: state.name,
    description: state.description,
  }))

  const { mutateAsync } = useKyMutation('put', 'me')

  const profileUrl = useUserStore((state) => state.profileUrl)

  const editProfile = async () => {
    setLoading(true)
    try {
      if (typeof profileUrl !== 'string') {
        const { data } = await kyInstance
          .post('me/upload-url', {
            body: JSON.stringify({
              fileExtension: profileUrl.type.split('/')[1],
            }),
          })
          .json()

        await uploadeToS3([data], [profileUrl])

        await kyInstance.post('me/upload-complete', {
          body: JSON.stringify({ imageId: data.id }),
        })
      }

      await mutateAsync(JSON.stringify(body))
      navigate('/me')
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
