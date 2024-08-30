const regionsData = {
  data: [
    {
      regionId: 1000,
      name: '활성화된 지역',
    },
    {
      regionId: 2000,
      name: '비활성화된 지역',
    },
    {
      regionId: 3000,
      name: '비활성화된 지역',
    },
  ],
}

const countriesData = {
  1000: {
    data: [
      {
        countryId: 1100,
        name: '일본',
      },
      {
        countryId: 1200,
        name: '중국',
      },
      {
        countryId: 1300,
        name: '비활성화된 국가 1',
      },
    ],
  },
  2000: {
    data: [],
  },
  3000: {
    data: [],
  },
}

const citiesData = {
  1100: {
    data: [
      {
        cityId: 1110,
        name: '활성화된 도시 1-1',
      },
      {
        cityId: 1120,
        name: '활성화된 도시 1-2',
      },
    ],
  },
  1200: {
    data: [
      {
        cityId: 1210,
        name: '활성화된 도시 2-1',
      },
      {
        cityId: 1220,
        name: '활성화된 도시 2-2',
      },
    ],
  },
  1300: {
    data: [],
  },
}

const categoriesData = {
  data: [
    {
      categoryId: 10000,
      name: '카테고리 1',
      subCategoryCount: 3,
    },
    {
      categoryId: 20000,
      name: '카테고리 2',
      subCategoryCount: 3,
    },
  ],
}

const subCategoriesData = {
  10000: {
    data: [
      {
        categoryId: 10000,
        subCategoryId: 10001,
        name: '서브 카테고리 1-1',
      },
      {
        categoryId: 10000,
        subCategoryId: 10002,
        name: '서브 카테고리 1-2',
      },
      {
        categoryId: 10000,
        subCategoryId: 10003,
        name: '서브 카테고리 1-3',
      },
    ],
  },
  20000: {
    data: [
      {
        categoryId: 20000,
        subCategoryId: 20001,
        name: '서브 카테고리 2-1',
      },
      {
        categoryId: 20000,
        subCategoryId: 20002,
        name: '서브 카테고리 2-2',
      },
      {
        categoryId: 20000,
        subCategoryId: 20003,
        name: '서브 카테고리 2-3',
      },
    ],
  },
}

/* productList 더미 데이터 */
const user = {
  id: 54329,
}

const dummyProductList = [
  {
    id: 24456,
    thumbnail:
      'https://sports.hankooki.com/news/photo/202406/6866870_1087630_489.jpg',
    name: 'Real Sayoon',
    city: 'Seoul',
    subcategory: 'Portrait',
    tags: [
      { id: 101, name: '귤락' },
      { id: 102, name: '10기' },
      { id: 103, name: '레노버' },
      { id: 104, name: '42Guest' },
    ],
    rates: 4.5,
    likeCount: 100,
  },
  {
    id: 24457,
    thumbnail:
      'https://i.namu.wiki/i/JkFtc-y1dM_3ityMm2kLId8iX8nf_AqboDeULLdpJ8pgxgvrIK7-Ne2Gg_Z7wC70vz4WTE2wkXFoQVyfFWz9rA.webp',
    name: 'Oyabung',
    city: 'Olympic',
    subcategory: 'Ohhamma',
    tags: [
      { id: 201, name: '오야붕' },
      { id: 202, name: '함대장' },
      { id: 203, name: '망치' },
    ],
    rates: 4.5,
    likeCount: 101,
  },
  {
    id: 24458,
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZAsKAc-RnQTaFKc-odIBaKlvNqMhephzJg&s',
    name: 'Yeongo',
    city: 'Naksungdae',
    subcategory: 'Fxck-end',
    tags: [
      { id: 301, name: '100m' },
      { id: 302, name: '패럴림픽' },
    ],
    rates: 4.5,
    likeCount: 101,
  },
  {
    id: 24459,
    thumbnail:
      'https://i.namu.wiki/i/-q-0mKMgM9KchsnXKMj7uaydcDqI9lGtScPqX5jK6MEAuIJROl0ypa40LX-varFiBSYr-hURike9lg4ACgZnDQ.webp',
    name: 'Sample',
    city: 'Sample',
    subcategory: 'Sample',
    tags: [
      { id: 401, name: 'tag1' },
      { id: 402, name: 'tag2' },
      { id: 403, name: 'tag3' },
      { id: 404, name: 'tag4' },
      { id: 405, name: 'tag5' },
    ],
    rates: 0,
    likeCount: 0,
  },
]

export {
  regionsData,
  countriesData,
  citiesData,
  categoriesData,
  subCategoriesData,
  user,
  dummyProductList,
}
