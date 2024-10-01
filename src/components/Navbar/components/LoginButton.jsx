import React from 'react'

import router from '../../../router'
import { modalIndex } from '../../../constants/navIndex'
import { useModalStore } from '../../../stores/navbarStores'
import useUserData from '../../../hooks/useUserData'
import ProfileImage from '../../UserProfile/ProfileImage'
import PlainButton from '../../Button/PlainButton'

export default function LoginButton() {
  const { data } = useUserData()
  const setModalState = useModalStore((store) => store.setModalState)

  return (
    <PlainButton
      onClick={() => {
        if (!data) {
          setModalState(modalIndex.LOGIN)
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
