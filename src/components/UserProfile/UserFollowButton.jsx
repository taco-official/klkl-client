import React from 'react'
import PropTypes from 'prop-types'
import { Button, ConfigProvider, notification } from 'antd'
import theme from '@styles/theme'
import useUserData from '@hooks/useUserData'
import useKyQuery from '@hooks/useKyQuery'
import useKyMutation from '@hooks/useKyMutation'
import useLoginModal from '@hooks/useLoginModal'

const useCheckFollow = (id) => {
  const {
    data: following,
    isLoading,
    isError,
  } = useKyQuery(`me/following/${id}`, ['me/following', id])

  if (isLoading || isError) return undefined

  return following.data.isFollowing
}

const useFollow = (id) => {
  const { mutateAsync } = useKyMutation('post', `me/following/${id}`, [
    'me/following',
    id,
  ])

  const followUser = async () => {
    try {
      await mutateAsync()
      notification.success({
        message: `팔로우 되었습니다`,
        duration: 1,
        placement: 'bottomLeft',
        style: { fontFamily: theme.style.main, width: '16.875rem' },
        closeIcon: false,
      })
    } catch (error) {
      console.error(error)
      alert('다시 시도해 주세요')
    }
  }

  return followUser
}

const useUnFollow = (id) => {
  const { mutateAsync } = useKyMutation('delete', `me/following/${id}`, [
    'me/following',
    id,
  ])

  const unFollowUser = async () => {
    try {
      await mutateAsync()
      notification.info({
        message: `팔로우를 취소했습니다`,
        duration: 1,
        placement: 'bottomLeft',
        style: { fontFamily: theme.style.main, width: '16.875rem' },
        closeIcon: false,
      })
    } catch (error) {
      console.error(error)
      alert('다시 시도해 주세요')
    }
  }

  return unFollowUser
}

function UserFollowButton({ id }) {
  const { data: userData } = useUserData()
  const isFollowed = useCheckFollow(id)
  const followUser = useFollow(id)
  const unFollowUser = useUnFollow(id)
  const popLoginModal = useLoginModal()

  if (isFollowed === undefined) return null

  if (userData?.data.id === id) return null

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.color.main,
          fontFamily: theme.style.mainBold,
        },
      }}
      wave={{ disabled: true }}
    >
      {isFollowed ? (
        <Button
          type="default"
          onClick={unFollowUser}
        >
          팔로우 취소
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            if (userData) followUser()
            else popLoginModal()
          }}
        >
          팔로우
        </Button>
      )}
    </ConfigProvider>
  )
}
UserFollowButton.propTypes = {
  id: PropTypes.number.isRequired,
}

export default UserFollowButton
