import React from 'react'
import styled from 'styled-components'
import { Button, ConfigProvider } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import useReviewStore from './stores/useReviewStore'
import theme from '../../style/theme'
import SelectionList from './components/SelectionList'

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

export default function CategorySelctionPage() {
  const [categoryId, subCategoryId, store, gosu] = useReviewStore(
    useShallow((state) => [
      state.categoryId,
      state.subCategoryId,
      state.store,
      state.gosu,
    ])
  )

  const setReviewContent = useReviewStore((state) => state.setReviewContents)

  const CATEGORY_FOOD = 400
  const SUBCATEGORYS_CONVINIENTSTORE = [501, 502, 504]

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
          optionState={categoryId}
          setOptionState={(id) => setReviewContent({ categoryId: id })}
          $width={`${100 / 2}%`}
        />

        {categoryId !== 0 && (
          <SelectionList
            optionList={SubCategoryDummy[categoryId]}
            optionState={subCategoryId}
            setOptionState={(id) => setReviewContent({ subCategoryId: id })}
            $width={`${100 / 2}%`}
          />
        )}
      </Wrapper>

      <ConfigProvider theme={buttonTheme}>
        {categoryId === CATEGORY_FOOD && (
          <>
            <h3>편의점에서 사셨나요?</h3>
            <Wrapper style={{ marginBottom: '1.875rem' }}>
              <CustomButton
                type={store ? 'primary' : 'default'}
                onClick={() => setReviewContent({ store: true })}
                style={{ marginRight: '1.5625rem' }}
              >
                YES
              </CustomButton>
              <CustomButton
                type={store ? 'default' : 'primary'}
                onClick={() => setReviewContent({ store: false })}
              >
                NO
              </CustomButton>
            </Wrapper>
          </>
        )}
        {categoryId === CATEGORY_FOOD &&
          SUBCATEGORYS_CONVINIENTSTORE.includes(subCategoryId) && (
            <>
              <h3>고수맛이 났더랩니까?</h3>
              <Wrapper style={{ marginBottom: '1.875rem' }}>
                <CustomButton
                  type={gosu ? 'primary' : 'default'}
                  onClick={() => setReviewContent({ gosu: true })}
                  style={{ marginRight: '1.5625rem' }}
                >
                  YES
                </CustomButton>
                <CustomButton
                  type={gosu ? 'default' : 'primary'}
                  onClick={() => setReviewContent({ gosu: false })}
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

const Wrapper = styled.div`
  width: 37.5rem;

  display: flex;

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

const CustomButton = styled(Button)`
  width: 6.25rem;
`
