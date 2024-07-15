import React from 'react'
import { styled } from 'styled-components'
import images from '../images/navbar/navImages'
import theme from '../style/theme'

const Header = styled.header`
  border-bottom: 1px solid #cccccc;
`

const MyNav = styled.nav`
  padding: 0px 100px;
  height: 72px;
  min-width: 637px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 30px;
    }

    h1 {
      margin-left: 10px;
      font-size: ${theme.fontSize.titleXL};
      font-family: ${theme.fontStyle.logo};
    }
  }

  button {
    width: 60px;
    height: 36px;
    font-family: ${theme.fontStyle.mainEB};
    font-size: ${theme.fontSize.textMD};
    color: white;
    background-color: ${theme.color.main};
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-grow: 0.9;

  li {
    font-family: ${theme.fontStyle.mainBold};
    display: flex;
    align-items: center;
    font-size: ${theme.fontSize.textMD};
    margin-left: 10px;
    cursor: pointer;

    &:nth-child(3) {
      margin: 0 0 0 auto;
    }

    img {
      width: 25px;
      margin-right: 5px;
    }
  }
`

export default function NavBar() {
  const navTexts = ['둘러보기', '검색', '좋아요', '알림']

  return (
    <Header>
      <MyNav>
        <div>
          <img
            src={images.logo}
            alt=""
          />
          <h1>끼룩끼룩</h1>
        </div>
        <NavList>
          {navTexts.map((text) => {
            return (
              <li>
                <img
                  src={images[text]}
                  alt=""
                />
                <div>{text}</div>
              </li>
            )
          })}
        </NavList>
        <button type="button">로그인</button>
      </MyNav>
    </Header>
  )
}
