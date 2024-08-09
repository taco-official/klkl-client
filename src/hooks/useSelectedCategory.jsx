import useBasicFilter from './useBasicFilter'

const useSelectedCategory = () => {
  const { selectedCategory, setSelectedCategory } = useBasicFilter()
  return { selectedCategory, setSelectedCategory }
}

export default useSelectedCategory
