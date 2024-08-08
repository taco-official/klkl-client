import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'antd'
import useSelectedFilter from '../../../hooks/useSelectedFilter'
import { FilterBox } from './AdditionalFilter.style'

function FilterSwitch({ filter }) {
  const { selectedFilter, setSelectedFilter } = useSelectedFilter()

  const handleSwitchChange = useCallback(() => {
    if (selectedFilter.some((selected) => selected.id === filter.filterId)) {
      setSelectedFilter(
        selectedFilter.filter((selected) => selected.id !== filter.filterId)
      )
    } else {
      setSelectedFilter((current) => [
        ...current,
        {
          id: filter.filterId,
          name: filter.name,
        },
      ])
    }
    console.log('click', filter.name)
  }, [selectedFilter, filter])

  useEffect(() => {
    console.log('selectedFilter', selectedFilter)
  }, [selectedFilter])

  return (
    <FilterBox>
      <div className="filter-name">{filter.name}</div>
      <Switch
        size="small"
        checked={selectedFilter.some(
          (selected) => selected.id === filter.filterId
        )}
        onChange={handleSwitchChange}
      />
    </FilterBox>
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
    return <FilterBox>필터가 없습니다.</FilterBox>
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
