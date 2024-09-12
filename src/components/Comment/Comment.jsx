import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import theme from '../../styles/theme'
import useKyQuery from '../../hooks/useKyQuery'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default function Comment({ userData }) {
  const { id } = useParams()
  const {
    data: comments,
    isError,
    error,
    isLoading,
  } = useKyQuery(`products/${id}/comments`, null, undefined, { staleTime: 0 })

  if (isError) return <div>{error}</div>
  if (isLoading) return <div>loading</div>

  return (
    <CommentSection>
      <h2>
        댓글 (<span>{Object.keys(comments.data).length}</span>)
      </h2>
      <CommentInput profile={userData.image} />
      <CommentList
        comments={comments.data}
        userId={userData.id}
      />
    </CommentSection>
  )
}
Comment.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

const CommentSection = styled.section`
  width: 95%;
  margin: 0 auto;

  h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.textSM};
    margin-bottom: 20px;
    margin-top: 20px;
  }
`
