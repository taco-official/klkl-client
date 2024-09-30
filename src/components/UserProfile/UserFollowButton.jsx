import React from 'react'
import PropTypes from 'prop-types'
import { Button, ConfigProvider, notification } from 'antd'

import useUserData from '../../hooks/useUserData'
import theme from '../../styles/theme'
import useKyQuery from '../../hooks/useKyQuery'
import useKyMutation from '../../hooks/useKyMutation'

const useCheckFollow = (id) => {
  const {
    data: following,
    isLoading,
    isError,
  } = useKyQuery(`members/me/following/${id}`, ['members/me/following', id])

  if (isLoading || isError) return null

  return following.data.isFollowing
}

const useFollow = (id) => {
  const { mutateAsync } = useKyMutation('post', `members/me/following/${id}`, [
    'members/me/following',
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
      window.alert('다시 시도해 주세요')
    }
  }

  return followUser
}

const useUnFollow = (id) => {
  const { mutateAsync } = useKyMutation(
    'delete',
    `members/me/following/${id}`,
    ['members/me/following', id]
  )

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
      window.alert('다시 시도해 주세요')
    }
  }

  return unFollowUser
}

function UserFollowButton({ id }) {
  const { data } = useUserData()
  const isFollowed = useCheckFollow(id)
  const followUser = useFollow(id)
  const unFollowUser = useUnFollow(id)

  if (data.data.id === id) return null

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
          onClick={followUser}
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
