import React from 'react'
import styled from 'styled-components'
import router from '@/router'
import theme from '@styles/theme'
import { navIndex, modalIndex } from '@constants/navIndex'
import { useCurrentPageStore, useModalStore } from '@stores/navbarStores'
import useLoginStore from '@stores/useLoginStore'
import Notification from './components/Notification'
import Icons from '../Icons/Icons'

export default function NavList() {
  const isLogin = useLoginStore((state) => state.isLogin)
  const currentPage = useCurrentPageStore((state) => state.currentPage)
  const { modalState, setModalState } = useModalStore()

  return (
    <NavUl>
      <NavButtonLi
        $isbold={
          currentPage === navIndex.FEED && modalState === modalIndex.NONE
        }
        onClick={() => {
          router.navigate('/feed', {
            state: { from: window.location.pathname },
          })
        }}
      >
        <Icons>flight_takeoff</Icons>
        둘러보기
      </NavButtonLi>
      <NavButtonLi
        $isbold={modalState === modalIndex.SEARCH}
        onClick={() => setModalState(modalIndex.SEARCH)}
      >
        <Icons>search</Icons>
        검색
      </NavButtonLi>

      {isLogin && (
        <NavButtonLi
          $isbold={modalState === modalIndex.NOTIFICATION}
          onClick={() => {
            if (modalState === modalIndex.NOTIFICATION)
              setModalState(modalIndex.NONE)
            else setModalState(modalIndex.NOTIFICATION)
          }}
        >
          <Notification />
        </NavButtonLi>
      )}
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

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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
