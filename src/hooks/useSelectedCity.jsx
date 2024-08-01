import useBasicFilter from './useBasicFilter'

const useSelectedCity = () => {
  const { selectedCity, setSelectedCity } = useBasicFilter()
  return { selectedCity, setSelectedCity }
}

export default useSelectedCity
