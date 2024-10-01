import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icons from '@components/Icons/Icons'
import theme from '@styles/theme'

function ReviewMiddleBlock({ address, price, currency }) {
  return (
    <Section>
      <LocationBox>
        <Icons>location_on</Icons>
        <p>{address === '' ? '상세 위치가 없습니다' : address}</p>
      </LocationBox>
      <PriceBox>
        <img src={currency.flagUrl} />
        <p className="currency-code">{currency.code}</p>
        <p className="currency-price">{`${price} ${currency.unit}`}</p>
      </PriceBox>
    </Section>
  )
}
ReviewMiddleBlock.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    unit: PropTypes.string,
    flagUrl: PropTypes.string,
  }),
}

const Section = styled.section`
  div {
    margin: 20px 0;

    display: flex;
    align-items: center;

    font-size: ${theme.size.titleSM};
    font-family: ${theme.style.mainBold};
  }
`

const LocationBox = styled.div`
  p {
    color: ${theme.color.textGrey};
    font-size: ${theme.size.textSM};
  }

  span {
    font-size: 1.5em;
    color: ${theme.color.main};
    margin-right: 5px;
  }
`

const PriceBox = styled.div`
  .currency-code {
    font-size: ${theme.size.textXS};
    color: ${theme.color.textGrey};
    margin-right: 0.3125rem;
  }

  .currency-price {
    font-size: ${theme.size.textSM};
  }

  img {
    height: 13px;
    aspect-ratio: 1.5 /1;
    margin-right: 5px;
    border-radius: 2px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    object-fit: cover;
  }
`

export default ReviewMiddleBlock
