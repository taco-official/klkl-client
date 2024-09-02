import React from 'react'
import PropTypes from 'prop-types'
import TagSwitchList from './TagSwitch'
import MessageBox from './TagSwitch.style'

function TagDataStatusRenderer({ isLoading, loading, data, isError, error }) {
  if (isLoading || loading) return null
  if (isError || error) return <MessageBox>로딩에 실패했습니다.</MessageBox>
  if (!data.data.length)
    return <MessageBox>선택 가능한 태그가 없습니다.</MessageBox>

  return <TagSwitchList tags={data.data} />
}

TagDataStatusRenderer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  isError: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
}

export default TagDataStatusRenderer
