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
        <p>{currency.code}</p>
        {price}
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
  font-size: ${theme.size.textSM};

  p {
    font-size: ${theme.size.textXS};
    color: ${theme.color.textGrey};
    margin-right: 0.3125rem;
  }

  img {
    height: 13px;
    aspect-ratio: 1.5 /1;
    margin-right: 5px;
    border-radius: 3px;
  }
`

export default ReviewMiddleBlock
