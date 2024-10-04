import React from 'react'
import { useShallow } from 'zustand/react/shallow'
import router from '@/router'
import { modalIndex } from '@constants/navIndex'
import { useModalStore } from '@stores/navbarStores'
import useLoginStore from '@/stores/useLoginStore'
import PlainButton from '../../Button/PlainButton'
import ProfileImage from '../../UserProfile/ProfileImage'

export default function LoginButton() {
  const { isLogin, loginData } = useLoginStore(
    useShallow((state) => ({
      isLogin: state.isLogin,
      loginData: state.loginData,
    }))
  )
  const setModalState = useModalStore((store) => store.setModalState)

  return (
    <PlainButton
      onClick={() => {
        if (!isLogin) {
          setModalState(modalIndex.LOGIN)
          return
        }

        router.navigate(`/me`)
      }}
    >
      <ProfileImage
        src={!isLogin ? null : loginData.image?.url}
        $size="2.1875rem"
      />
    </PlainButton>
  )
}
