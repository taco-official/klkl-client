import initializeSearchState from '@utils/initializeSearchState'

const navigateWithState = (navigate, category, content) => {
  const searchState = initializeSearchState(category, content)
  navigate('/feed', {
    state: {
      from: window.location.pathname,
      data: searchState,
    },
  })
}

export default navigateWithState
