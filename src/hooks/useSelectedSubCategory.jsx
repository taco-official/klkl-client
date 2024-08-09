import useBasicFilter from './useBasicFilter'

const useSelectedSubCategory = () => {
  const { selectedSubCategory, setSelectedSubCategory } = useBasicFilter()
  return { selectedSubCategory, setSelectedSubCategory }
}

export default useSelectedSubCategory
