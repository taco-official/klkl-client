import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, theme as antdTheme } from 'antd'
// import useKy from '../../../../hooks/useKy'
import useFeedStore from '../../../../stores/useFeedStore'
import theme from '../../../../styles/theme'

function FilterSwitch({ filter }) {
  const selectedFilter = useFeedStore((state) => state.selectedFilter)
  const [inArray, addSelectedFilter, deleteSelectedFilter] = useFeedStore(
    (state) => [
      state.inArray,
      state.addSelectedFilter,
      state.deleteSelectedFilter,
    ]
  )

  const handleSwitchChange = () => {
    if (inArray(selectedFilter, filter.filterId)) {
      deleteSelectedFilter(filter.filterId)
    } else {
      addSelectedFilter({
        id: filter.filterId,
        name: filter.name,
      })
    }
  }

  return (
    <Button
      shape="round"
      size="small"
      style={{
        color: inArray(selectedFilter, filter.filterId)
          ? theme.color.main
          : antdTheme.defaultColorText,
        borderColor: inArray(selectedFilter, filter.filterId)
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
