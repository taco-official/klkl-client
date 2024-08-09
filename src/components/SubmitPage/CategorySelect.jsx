import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, ConfigProvider } from 'antd'
import theme from '../../styles/theme'
import SelectionList from './Commons/SelectionList'
import { SmoothAnimation } from './Commons/CommonVariable'
import { reviewDataType } from './Commons/reviewReducer'

const CategoryDummy = [
  {
    regionId: 400,
    name: '식품',
  },
  {
    regionId: 401,
    name: '의류',
  },
  {
    regionId: 402,
    name: '잡화',
  },
  {
    regionId: 403,
    name: '화장품',
  },
]

const SubCategoryDummy = {
  400: [
    { countryId: 501, name: '라면 및 즉석식품' },
    { countryId: 502, name: '스낵 및 과자' },
    { countryId: 504, name: '조미료 및 소스' },
    { countryId: 505, name: '음료 및 차' },
    { countryId: 506, name: '주류' },
  ],
  401: [
    { countryId: 507, name: '상의' },
    { countryId: 508, name: '하의' },
    { countryId: 509, name: '아우터' },
    { countryId: 510, name: '원피스' },
    { countryId: 511, name: '신발' },
    { countryId: 512, name: '액세사리' },
    { countryId: 513, name: '쥬얼리' },
  ],
  402: [
    { countryId: 514, name: '일반의약품' },
    { countryId: 515, name: '주방잡화' },
    { countryId: 516, name: '욕실잡화' },
    { countryId: 517, name: '문구 및 완구' },
  ],
  403: [
    { countryId: 518, name: '스킨케어' },
    { countryId: 519, name: '메이크업' },
    { countryId: 520, name: '헤어케어' },
    { countryId: 521, name: '바디케어' },
    { countryId: 522, name: '위생용품' },
  ],
}

const buttonTheme = {
  components: {
    Button: {},
  },
  token: {
    fontFamily: theme.style.mainBold,
    colorPrimary: theme.color.main,
    colorPrimaryHover: theme.color.mainDark,
  },
}

export default function CategorySelctionPage({ review, setReviewContent }) {
  const [store, setStore] = useState(false)
  const [gosu, setGosu] = useState(false)

  return (
    <>
      <h2>
        상품 분류를 <br />
        선택해주세요
      </h2>
      <h3>상품 분류</h3>
      <Wrapper>
        <SelectionList
          optionList={CategoryDummy}
          optionState={review.categoryId}
          setOptionState={(num) => setReviewContent('SET_CATEGORY', num)}
          $width={`${100 / 2}%`}
        />
        {review.categoryId !== 0 && (
          <SelectionList
            optionList={SubCategoryDummy[review.categoryId]}
            optionState={review.subCategoryId}
            setOptionState={(num) => setReviewContent('SET_SUBCATEGORY', num)}
            $width={`${100 / 2}%`}
          />
        )}
      </Wrapper>
      <ConfigProvider theme={buttonTheme}>
        {review.categoryId === 400 && (
          <>
            <h3>편의점에서 사셨나요?</h3>
            <Wrapper style={{ marginBottom: '1.875rem' }}>
              <CustomButton
                type={store ? 'primary' : 'default'}
                onClick={() => setStore(true)}
                style={{ marginRight: '1.5625rem' }}
              >
                YES
              </CustomButton>
              <CustomButton
                type={store ? 'default' : 'primary'}
                onClick={() => setStore(false)}
              >
                NO
              </CustomButton>
            </Wrapper>
          </>
        )}
        {review.categoryId === 400 &&
          [501, 502, 504].includes(review.subCategoryId) && (
            <>
              <h3>is GOSU there?</h3>
              <Wrapper style={{ marginBottom: '1.875rem' }}>
                <CustomButton
                  type={gosu ? 'primary' : 'default'}
                  onClick={() => setGosu(true)}
                  style={{ marginRight: '1.5625rem' }}
                >
                  YES
                </CustomButton>
                <CustomButton
                  type={gosu ? 'default' : 'primary'}
                  onClick={() => setGosu(false)}
                >
                  NO
                </CustomButton>
              </Wrapper>
            </>
          )}
      </ConfigProvider>
    </>
  )
}
CategorySelctionPage.propTypes = {
  review: PropTypes.shape(reviewDataType).isRequired,
  setReviewContent: PropTypes.func.isRequired,
}

const Wrapper = styled.div`
  width: 37.5rem;

  display: flex;

  margin-bottom: 1.875rem;
  ${SmoothAnimation}
`

const CustomButton = styled(Button)`
  width: 6.25rem;
`
