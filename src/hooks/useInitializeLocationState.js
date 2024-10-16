import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useFeedStore from '@stores/useFeedStore'

const useInitializeLocationState = () => {
  const location = useLocation()
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)

  useEffect(() => {
    const deleteDataState = (state) => {
      if (!state?.usr) return state
      const newState = { ...state, usr: { ...state.usr } }
      if ('data' in newState.usr) delete newState.usr.data
      return newState
    }
    const { history } = window
    if (history.state) {
      const newState = deleteDataState(history.state)
      if (newState) history.replaceState(newState, '')
    }
    return resetSelectedField
  }, [location.state])
}

export default useInitializeLocationState
