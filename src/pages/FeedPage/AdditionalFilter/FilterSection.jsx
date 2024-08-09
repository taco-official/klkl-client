import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button, theme as antdTheme } from 'antd'
import useSelectedFilter from '../../../hooks/useSelectedFilter'
import { FilterWrapper } from './AdditionalFilter.style'
import theme from '../../../styles/theme'

function FilterSwitch({ filter }) {
  const { selectedFilter, setSelectedFilter } = useSelectedFilter()
  const [isClicked, setIsClicked] = useState(
    selectedFilter.find((selected) => selected.id === filter.filterId) || false
  )

  const handleSwitchChange = useCallback(() => {
    if (selectedFilter.some((selected) => selected.id === filter.filterId)) {
      setSelectedFilter(
        selectedFilter.filter((selected) => selected.id !== filter.filterId)
      )
      setIsClicked(false)
    } else {
      setSelectedFilter((current) => [
        ...current,
        {
          id: filter.filterId,
          name: filter.name,
        },
      ])
      setIsClicked(true)
    }
    console.log('click', filter.name)
  }, [selectedFilter, filter])

  useEffect(() => {
    console.log('selectedFilter', selectedFilter)
  }, [selectedFilter])
  useEffect(() => {
    console.log('isClicked', filter.name, isClicked)
  }, [isClicked])

  return (
    <FilterWrapper>
      <Button
        shape="round"
        size="small"
        style={{
          color: isClicked ? theme.color.main : antdTheme.defaultColorText,
          borderColor: isClicked
            ? theme.color.main
            : antdTheme.defaultColorBorder,
        }}
        checked={selectedFilter.some(
          (selected) => selected.id === filter.filterId
        )}
        onClick={handleSwitchChange}
      >
        {filter.name}
      </Button>
    </FilterWrapper>
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

      const initializeFilterState = filterData.data.reduce(
        (acc, filter, index) => {
          acc[index] = {
            filterId: filter.filterId,
            name: filter.name,
          }
          return acc
        },
        [filterData.data]
      )
      setFilters(initializeFilterState)
    }

    fetchFilterData()
  }, [])

  if (filters.length === 0) {
    return <FilterWrapper>필터가 없습니다.</FilterWrapper>
  }

  return (
    <>
      {filters.map((filter) => (
        <FilterSwitch
          key={filter.filterId}
          filter={filter}
        />
      ))}
    </>
  )
}

export default FilterSwitchArray
