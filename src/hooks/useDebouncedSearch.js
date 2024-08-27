import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { debounce } from 'lodash-es'
import { useNavigate } from 'react-router-dom'

import { kyInstance } from './kyInstance'
import theme from '../styles/theme'

const SearchMapping = {
  products: '리뷰',
  categories: '카테고리',
  subcategories: '하위 카테고리',
  cities: '도시',
  countries: '국가',
}

const useDebouncedSearch = (setModalState) => {
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const debouncedSearch = useCallback(
    debounce(async (inputValue) => {
      if (inputValue === '') {
        setResults([])
        return
      }

      try {
        const data = await kyInstance.get(`search?q=${inputValue}`).json()

        const newResult = Object.entries(data.data).map(
          ([category, result]) => {
            if (result.length === 0) return null

            if (result.length > 10) return <ResultRow>검색창?</ResultRow>

            const searchValues = result.map((content) => (
              <ResultRow
                key={content.name}
                onClick={() => {
                  setModalState(false)
                  navigate('/', { state: { from: window.location.pathname } })
                }}
              >
                {content.name}
                <span>→ 보러가기</span>
              </ResultRow>
            ))

            searchValues.unshift(
              <Divider
                orientation="left"
                orientationMargin={0}
                style={{
                  fontFamily: theme.style.mainBold,
                  fontSize: theme.size.text2XS,
                  color: 'rgba(0,0,0, 0.5)',
                  margin: '5px 0',
                }}
              >
                {SearchMapping[category]}
              </Divider>
            )

            return searchValues
          }
        )

        setResults(newResult)
      } catch (error) {
        setResults([<ResultRow>오류가 발생했습니다</ResultRow>])
      }
    }, 150),
    []
  )

  return [results, debouncedSearch]
}

const ResultRow = styled.div`
  height: 2.1875rem;

  font-family: ${theme.style.main};
  font-size: ${theme.size.textSM};

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3px 0;
  padding: 0 10px;
  border-radius: 5px;

  cursor: pointer;
  transition: all ease-in-out 0.2s;

  span {
    font-size: ${theme.size.text2XS};
    color: rgba(0, 0, 0, 0.7);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export default useDebouncedSearch
