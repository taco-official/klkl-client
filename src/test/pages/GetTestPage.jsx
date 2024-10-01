import React, { useState, useCallback, useEffect } from 'react'
import useKy from '@hooks/useKy'

function GetTestPage() {
  const [movies, setMovies] = useState([])
  const kyConfig = {
    /* 'url' must not begin with a slash('/') when using `prefixUrl` */
    prefixUrl: 'https://yts.mx/api/v2/',
    url: 'list_movies.json?minimum_rating=9&sort_by=year',
    // method: 'get',
    /* post request body */
    // method: 'post',
    // body: {
    // foo: 'bar',
    // },
  }
  const { data, loading, error, fetchData } = useKy()

  const fetchMovies = useCallback(async () => {
    await fetchData(kyConfig)
    if (!loading) setMovies(data?.data)
  }, [data, loading, fetchData])

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    console.log('data', data)
    if (!loading) setMovies(data?.data.movies)
  }, [loading])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Test Page</h1>
      {movies?.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  )
}

export default GetTestPage
