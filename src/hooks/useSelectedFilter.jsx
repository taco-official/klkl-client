import useAdditionalFilter from './useAdditionalFilter'

const useSelectedFilterProperty = () => {
  const { selectedFilter, setSelectedFilter } = useAdditionalFilter()
  return { selectedFilter, setSelectedFilter }
}

export default useSelectedFilterProperty
