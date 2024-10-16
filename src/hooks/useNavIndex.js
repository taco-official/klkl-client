import { useEffect } from 'react'
import { navIndex } from '@constants/navIndex'
import { useCurrentPageStore } from '@stores/navbarStores'

const useNavIndex = (index) => {
  const { currentPage, setCurrentPage } = useCurrentPageStore()

  useEffect(() => {
    if (currentPage !== navIndex[index]) setCurrentPage(navIndex[index])
    return () => setCurrentPage(navIndex.NONE)
  }, [])
}

export default useNavIndex
