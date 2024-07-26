import { React, useState } from 'react'
import { styled } from 'styled-components'
import { IoSearchSharp } from 'react-icons/io5'
import { HiPaperAirplane } from 'react-icons/hi2'
import { FaHeart } from 'react-icons/fa6'
import { TbBellFilled } from 'react-icons/tb'
import theme from '../../style/theme'

export default function NavList() {
  const texts = ['둘러보기', '검색', '좋아요', '알림']
  const icons = [
    <HiPaperAirplane />,
    <IoSearchSharp />,
    <FaHeart />,
    <TbBellFilled />,
  ]
  const [currentPage, changePage] = useState('')

  return (
    <NavUl>
      {texts.map((text, i) => {
        return (
          <NavButtonLi
            key={text}
            $isbold={text === currentPage}
            onClick={() => {
              changePage(text)
            }}
          >
            {icons[i]}
            <p>{text}</p>
          </NavButtonLi>
        )
      })}
    </NavUl>
  )
}

const NavUl = styled.ul`
  display: flex;
  flex-grow: 0.9;
  height: 100%;
`

const NavButtonLi = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;
  padding: 0 7px;

  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textSM};
  color: ${(props) => (props.$isbold ? theme.color.main : 'black')};
  border-bottom: ${(props) =>
    props.$isbold ? `2px solid ${theme.color.main}` : null};
  cursor: pointer;

  &:nth-child(3) {
    margin-left: auto;
  }

  &:hover {
    color: ${theme.color.main};
    border-bottom: 2px solid ${theme.color.main};
  }

  p {
    margin-left: 3px;
  }
`
