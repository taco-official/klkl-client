import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icons from '../../components/Icons/Icons'
import theme from '../../styles/theme'

function ReviewMiddleBlock({ address, price, currency }) {
  return (
    <Wrapper>
      <LocationBox>
        <Icons>location_on</Icons>
        {address === '' ? '상세 위치가 없습니다' : address}
      </LocationBox>
      <PriceBox>
        <img src={currency.flag} />
        {`${currency.code} ${price}`}
      </PriceBox>
    </Wrapper>
  )
}
ReviewMiddleBlock.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    flag: PropTypes.string,
  }),
}

const Wrapper = styled.div`
  div {
    margin: 20px 0;

    display: flex;
    align-items: center;

    font-size: ${theme.size.titleSM};
    font-family: ${theme.style.mainBold};
  }
`

const LocationBox = styled.div`
  font-size: ${theme.size.titleXL};
  color: ${theme.color.textGrey};

  span {
    font-size: 1.5em;
    color: ${theme.color.main};
    margin-right: 5px;
  }
`

const PriceBox = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.size.textXS};
    font-family: ${theme.style.mainBold};
    background-color: rgba(255, 255, 255, 1);
    padding: 5px;
    margin-right: 0.625rem;
    border: none;
    border-radius: 0.3125rem;

    transition: all ease-in-out 0.1s;

    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.8);
    }
  }

  img {
    height: 13px;
    aspect-ratio: 1.5 /1;
    margin-right: 5px;
    border-radius: 3px;
  }
`

export default ReviewMiddleBlock
