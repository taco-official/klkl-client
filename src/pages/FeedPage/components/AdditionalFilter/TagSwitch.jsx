import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider, Button, theme as antdTheme } from 'antd'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import theme from '../../../../styles/theme'
import { buttonTheme } from '../../FeedPage.style'
import MessageBox from './TagSwitch.style'

function TagSwitch({ tag }) {
  const selectedTag = useFeedStore((state) => state.selectedTag)
  const [addSelectedTag, deleteSelectedTag] = useFeedStore((state) => [
    state.addSelectedTag,
    state.deleteSelectedTag,
  ])

  const tagInSelected = inArray(selectedTag, tag.id)

  const handleSwitchChange = () => {
    if (tagInSelected) deleteSelectedTag(tag.id)
    else addSelectedTag(tag)
  }

  return (
    <Button
      shape="round"
      size="small"
      style={{
        color: tagInSelected ? theme.color.main : antdTheme.defaultColorText,
        borderColor: tagInSelected
          ? theme.color.main
          : antdTheme.defaultColorBorder,
      }}
      onClick={handleSwitchChange}
    >
      {tag.name}
    </Button>
  )
}

TagSwitch.propTypes = {
  tag: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function TagSwitchList({ tags }) {
  if (!tags.length) return <MessageBox>선택 가능한 태그가 없습니다.</MessageBox>

  return (
    <ConfigProvider theme={buttonTheme}>
      {tags.map((tag) => (
        <TagSwitch
          key={tag.id}
          tag={tag}
        />
      ))}
    </ConfigProvider>
  )
}

TagSwitchList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TagSwitchList
