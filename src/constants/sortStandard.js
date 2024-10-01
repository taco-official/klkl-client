const sortStandard = [
  {
    key: 0,
    label: '최신 순',
    sortBy: 'created_at',
    sortDirection: 'DESC',
  },
  {
    key: 1,
    label: '오래된 순',
    sortBy: 'created_at',
    sortDirection: 'ASC',
  },
  {
    key: 2,
    label: '평점 순',
    sortBy: 'rating',
    sortDirection: 'DESC',
  },
  {
    key: 3,
    label: '좋아요 순',
    sortBy: 'like_count',
    sortDirection: 'DESC',
  },
]

export default sortStandard
