import React from 'react'

import { useModalStore } from '../../../stores/navbarStores'
import useUserData from '../../../hooks/useUserData'
import ProfileImage from '../../UserProfile/ProfileImage'
import router from '../../../router'
import PlainButton from '../../Button/PlainButton'

export default function LoginButton() {
  const { data } = useUserData()
  const setLoginModalState = useModalStore((store) => store.setLoginModalState)

  return (
    <PlainButton
      onClick={() => {
        if (!data) {
          setLoginModalState(true)
          return
        }

        router.navigate(`/me`)
      }}
    >
      <ProfileImage
        src={!data ? null : data.data.image?.url}
        $size="2.1875rem"
      />
    </PlainButton>
  )
}
