import useAdditionalFilter from './useAdditionalFilter'

const useSelectedFilter = () => {
  const { selectedFilter, setSelectedFilter } = useAdditionalFilter()
  return { selectedFilter, setSelectedFilter }
}

export default useSelectedFilter
