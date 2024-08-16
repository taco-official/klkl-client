import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, theme as antdTheme } from 'antd'
// import useKy from '../../../../hooks/useKy'
import useFeedStore from '../../../../stores/useFeedStore'
import theme from '../../../../styles/theme'

function FilterSwitch({ filter }) {
  const selectedFilter = useFeedStore((state) => state.selectedFilter)
  const setSelectedFilter = useFeedStore((state) => state.setSelectedFilter)
  const [isClicked, setIsClicked] = useState(
    selectedFilter.some((selected) => selected.id === filter.filterId) || false
  )

  const handleSwitchChange = () => {
    if (selectedFilter.some((selected) => selected.id === filter.filterId)) {
      setSelectedFilter(
        selectedFilter.filter((selected) => selected.id !== filter.filterId)
      )
      setIsClicked(false)
    } else {
      setSelectedFilter([
        ...selectedFilter,
        {
          id: filter.filterId,
          name: filter.name,
        },
      ])
      setIsClicked(true)
    }
  }

  useEffect(() => {
    if (selectedFilter.some((selected) => selected.id === filter.filterId))
      setIsClicked(true)
    else setIsClicked(false)
  }, [selectedFilter])

  return (
    <Button
      shape="round"
      size="small"
      style={{
        color: isClicked ? theme.color.main : antdTheme.defaultColorText,
        borderColor: isClicked
          ? theme.color.main
          : antdTheme.defaultColorBorder,
      }}
      onClick={handleSwitchChange}
    >
      {filter.name}
    </Button>
  )
}

FilterSwitch.propTypes = {
  filter: PropTypes.shape({
    filterId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function FilterSwitchArray() {
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const fetchFilterData = () => {
      const filterData = {
        data: [
          {
            filterId: 8001,
            name: '편의점',
          },
          {
            filterId: 8002,
            name: '고수',
          },
        ],
      }

      const initializeFilterState = filterData.data.reduce((acc, filter) => {
        acc.push({
          filterId: filter.filterId,
          name: filter.name,
        })
        return acc
      }, [])
      setFilters(initializeFilterState)
    }

    fetchFilterData()
  }, [])

  if (filters.length === 0) {
    return <>필터가 없습니다.</>
  }

  return filters.map((filter) => (
    <FilterSwitch
      key={filter.filterId}
      filter={filter}
    />
  ))
}

export default FilterSwitchArray
