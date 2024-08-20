import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ky from 'ky'
import { useQuery } from '@tanstack/react-query'
import Icons from '../../components/Icons/Icons'
import theme from '../../styles/theme'

const useExchangeData = (currency) => {
  const {
    data: exchanges,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['exchange'],
    queryFn: () =>
      ky
        .get(
          'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=DsijYpQUe0gJa5Q81gZLgzY5Hfrim8I1&data=AP01'
        )
        .json(),
    retry: false,
    cacheTime: 86400000,
    staleTime: 86400000,
  })

  let exchangeCurrency = {}

  if (!isLoading) {
    exchangeCurrency = {
      ...exchanges.find((data) => data.cur_unit.slice(0, 3) === currency.code),
    }

    exchangeCurrency.bkpr = exchangeCurrency.bkpr.replace(',', '')

    exchangeCurrency.bkpr =
      exchangeCurrency.cur_unit.length > 3
        ? parseInt(exchangeCurrency.bkpr / 100, 10)
        : Number(exchangeCurrency.bkpr)
  }

  return { exchangeCurrency, isError, isLoading }
}

function ReviewMiddleBlock({ address, price, currency }) {
  const { exchangeCurrency, isLoading, isError } = useExchangeData(currency)
  const [currencyState, setCurrencyState] = useState(false)

  if (isLoading) return <div>loading</div>
  if (isError) return <div>환율 정보를 불러오는 데 실패했습니다</div>

  return (
    <Wrapper>
      <LocationBox>
        <Icons>location_on</Icons>
        {address === '' ? '상세 위치가 없습니다' : address}
      </LocationBox>
      <PriceBox>
        <button
          type="button"
          onClick={() => setCurrencyState(!currencyState)}
        >
          환전
        </button>
        <img src={currency.flag} />
        {currencyState ? price * exchangeCurrency.bkpr : price}{' '}
        {currencyState ? '원' : exchangeCurrency.cur_nm}
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

    color: white;
    font-size: ${theme.size.textXS};
    font-family: ${theme.style.mainBold};
    background-color: ${theme.color.main};
    padding: 5px;
    margin-right: 0.625rem;
    border: none;
    border-radius: 0.3125rem;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.5);

    transition: all ease-in-out 0.1s;

    cursor: pointer;

    &:hover {
      background-color: ${theme.color.mainDark};
    }
    &:active {
      transform: translate(0, 2px);
      box-shadow: none;
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
