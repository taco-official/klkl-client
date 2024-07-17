import { React, useState } from 'react'
import { styled } from 'styled-components'
import { navImages } from '../../images/navbar/navImages'
import theme from '../../style/theme'

export default function NavList() {
  const texts = ['둘러보기', '검색', '좋아요', '알림']
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
            <NavButtonImage src={navImages[i]} />
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

const NavButtonImage = styled.img`
  width: ${theme.size.textMD};
  margin-right: 5px;
  cursor: pointer;
`

const NavButtonLi = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 10px;

  font-family: ${(props) =>
    props.$isbold ? theme.style.mainEB : theme.style.mainBold};
  color: ${(props) => (props.$isbold ? theme.color.main : 'black')};
  border-bottom: ${(props) =>
    props.$isbold ? `2px solid ${theme.color.main}` : null};

  cursor: pointer;

  &:nth-child(3) {
    margin-left: auto; // 3번째와 4번째 li만 오른쪽으로 밀어내기
  }

  &:hover {
    font-family: ${theme.style.mainEB};
    color: ${theme.color.main};
    border-bottom: 2px solid ${theme.color.main};
  }
`
