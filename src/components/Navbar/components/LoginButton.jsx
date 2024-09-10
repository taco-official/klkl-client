import React from 'react'

import { useModalStore } from '../../../stores/navbarStores'
import useUserData from '../../../hooks/useUserData'
import ProfileImage from '../../UserProfile/ProfileImage'
import router from '../../../router'
import PlainButton from '../../Button/PlainButton'

export default function LoginButton() {
  const userData = useUserData()
  const setLoginModalState = useModalStore((store) => store.setLoginModalState)

  return (
    <PlainButton
      onClick={() => {
        if (!userData) {
          setLoginModalState(true)
          return
        }

        router.navigate(`/users/${userData.id}`)
      }}
    >
      <ProfileImage
        src={!userData ? null : userData.profileUrl}
        $size="2.5rem"
      />
    </PlainButton>
  )
}
