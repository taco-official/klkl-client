import useBasicFilter from './useBasicFilter'

const useSelectedCountry = () => {
  const { selectedCountry, setSelectedCountry } = useBasicFilter()
  return { selectedCountry, setSelectedCountry }
}

export default useSelectedCountry
