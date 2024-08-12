import React from 'react'
import { styled } from 'styled-components'

import { useModalStore, useCurrentPageStore } from './stores/navbarStores'
import theme from '../../style/theme'
import Icons from '../Common/Icons'

export default function NavList() {
  const pageIndex = {
    FLIGHT: 1,
    SEARCH: 2,
    FAVORITE: 3,
    NOTIFICATION: 4,
  }
  const { currentPage, setCurrentPage } = useCurrentPageStore()
  const setSearchModalState = useModalStore(
    (state) => state.setSearchModalState
  )

  return (
    <NavUl>
      <NavButtonLi
        $isbold={currentPage === pageIndex.FLIGHT}
        onClick={() => setCurrentPage(pageIndex.FLIGHT)}
      >
        <Icons>flight_takeoff</Icons>
        둘러보기
      </NavButtonLi>
      <NavButtonLi
        $isbold={currentPage === pageIndex.SEARCH}
        onClick={() => {
          setCurrentPage(pageIndex.SEARCH)
          setSearchModalState(true)
        }}
      >
        <Icons>search</Icons>
        검색
      </NavButtonLi>
      <NavButtonLi
        $isbold={currentPage === pageIndex.FAVORITE}
        onClick={() => setCurrentPage(pageIndex.FAVORITE)}
      >
        <Icons>favorite</Icons>
        좋아요
      </NavButtonLi>
      <NavButtonLi
        $isbold={currentPage === pageIndex.NOTIFICATION}
        onClick={() => setCurrentPage(pageIndex.NOTIFICATION)}
      >
        <Icons>notifications</Icons>
        알림
      </NavButtonLi>
    </NavUl>
  )
}

const NavUl = styled.ul`
  display: flex;
  flex-grow: 1;
  margin: 0 10px;
  height: 100%;
`

const NavButtonLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 0 5px;

  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textSM};
  color: ${(props) => props.$isbold && theme.color.main};
  border-bottom: ${(props) =>
    props.$isbold ? `2px solid ${theme.color.main}` : `2px solid transparent`};
  cursor: pointer;
  transition: color ease-in-out 0.2s;

  span {
    margin-right: 3px;
  }

  &:nth-child(3) {
    margin-left: auto;
  }

  &:hover {
    color: ${theme.color.main};
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.color.main};
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
`
