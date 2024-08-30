import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider, Button, theme as antdTheme } from 'antd'
import parseQueryParams from '../../../../utils/parseQueryParams'
import useKy from '../../../../hooks/useKy'
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

function TagSwitchList({ queryData }) {
  const [tags, setTags] = useState([])
  const { loading, data: tagData, error, fetchData } = useKy()

  useEffect(() => {
    if (queryData.length)
      fetchData({ url: parseQueryParams('tags', queryData) })
  }, [queryData])

  useEffect(() => {
    if (!loading && !error && tagData) setTags(tagData.data)
  }, [loading, error, tagData])

  if (loading) return <MessageBox>불러오는 중입니다.</MessageBox>

  if (error) return <MessageBox>로딩에 실패했습니다.</MessageBox>

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
  queryData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ])
      ),
    })
  ),
}

export default TagSwitchList
