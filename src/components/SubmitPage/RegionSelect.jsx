import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import useReviewStore from './stores/useReviewStore'
import SelectionList from './components/SelectionList'
import theme from '../../style/theme'

const Regions = [
  {
    regionId: 400,
    name: '동북아시아',
  },
  {
    regionId: 401,
    name: '동남아시아',
  },
  {
    regionId: 402,
    name: '기타',
  },
]

const Countries = {
  400: [
    { countryId: 501, name: '일본' },
    { countryId: 502, name: '중국' },
    { countryId: 503, name: '대만' },
  ],
  401: [
    { countryId: 504, name: '태국' },
    { countryId: 505, name: '베트남' },
    { countryId: 506, name: '필리핀' },
    { countryId: 507, name: '싱가포르' },
    { countryId: 508, name: '인도네시아' },
    { countryId: 509, name: '말레이시아' },
  ],
  402: [
    { countryId: 510, name: '괌' },
    { countryId: 511, name: '미국' },
  ],
}

const Cities = {
  501: [
    { cityId: 601, name: '오사카' },
    { cityId: 602, name: '교토' },
    { cityId: 603, name: '도쿄' },
    { cityId: 604, name: '후쿠오카' },
    { cityId: 605, name: '오키나와' },
    { cityId: 606, name: '삿포로' },
    { cityId: 607, name: '나고야' },
  ],
  502: [
    { cityId: 608, name: '홍콩' },
    { cityId: 609, name: '상하이' },
    { cityId: 610, name: '베이징' },
  ],
  503: [{ cityId: 615, name: '타이베이' }],
  504: [
    { cityId: 616, name: '방콕' },
    { cityId: 617, name: '치앙마이' },
    { cityId: 618, name: '푸켓' },
  ],
  505: [
    { cityId: 619, name: '다낭' },
    { cityId: 620, name: '나트랑' },
    { cityId: 621, name: '호치민' },
    { cityId: 622, name: '하노이' },
  ],
  506: [
    { cityId: 623, name: '세부' },
    { cityId: 624, name: '보라카이' },
  ],
  507: [{ cityId: 625, name: '싱가포르' }],
  508: [{ cityId: 626, name: '발리' }],
  509: [
    { cityId: 627, name: '코타키나발루' },
    { cityId: 628, name: '쿠알라룸푸르' },
  ],
  510: [{ cityId: 629, name: '투몬' }],
  511: [
    { cityId: 630, name: '뉴욕' },
    { cityId: 631, name: '로스앤젤레스' },
    { cityId: 632, name: '하와이' },
  ],
}

export default function RegionSubmitPage() {
  const [continentId, countryId, cityId, address] = useReviewStore(
    useShallow((state) => [
      state.continentId,
      state.countryId,
      state.cityId,
      state.address,
    ])
  )

  const setReviewContents = useReviewStore((state) => state.setReviewContents)

  return (
    <>
      <h2>
        구매 지역을
        <br />
        선택해주세요
      </h2>

      <SelectBoxesWrapper>
        <SelectionList
          optionList={Regions}
          optionState={continentId}
          setOptionState={(id) =>
            setReviewContents({ continentId: id, countryId: 0, cityId: 0 })
          }
          $width={`${100 / 3}%`}
        />

        {continentId !== 0 && (
          <SelectionList
            optionList={Countries[continentId]}
            optionState={countryId}
            setOptionState={(id) =>
              setReviewContents({ countryId: id, cityId: 0 })
            }
            $width={`${100 / 3}%`}
          />
        )}

        {countryId !== 0 && (
          <SelectionList
            optionList={Cities[countryId]}
            optionState={cityId}
            setOptionState={(id) => setReviewContents({ cityId: id })}
            $width={`${100 / 3}%`}
          />
        )}
      </SelectBoxesWrapper>

      {cityId !== 0 && (
        <>
          <h2>
            구매 주소를
            <br />
            입력해주세요
          </h2>
          <CustomInput
            maxLength={50}
            defaultValue={address}
            placeholder="주소입력"
            style={{ width: '37.5rem' }}
            onChange={(e) => setReviewContents({ address: e.target.value })}
            size="large"
          />
        </>
      )}
    </>
  )
}

const SelectBoxesWrapper = styled.div`
  width: 37.5rem;
  height: 10.9375rem;

  display: flex;
  margin-bottom: 1.875rem;
`

const CustomInput = styled(Input)`
  font-size: ${theme.size.textSM};
  font-family: ${theme.style.main};
  margin-bottom: 1.875rem;

  @keyframes openModal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.99;
    }
  }

  animation: openModal ease-in 0.3s;
`
