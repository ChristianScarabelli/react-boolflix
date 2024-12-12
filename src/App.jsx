import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI, API_KEY } from './config'
import BoolflixContext from './contexts/BoolflixContext'
import BoolflixMain from './pages/BoolflixMain'

function App() {

  // variabile di stato per i movies
  const [movies, setMovies] = useState([])

  // chiamata all'API per i movies, con parametro query che sarà il form
  function fetchMovies(query) {
    axios.get(`${BASE_URI}/search/movie?${API_KEY}&query=${query}`)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.error('Issues in movies search:', err)
      })
  }

  // variabile di stato per le series
  const [series, setSeries] = useState([])

  // chiamata all'API per le series, con parametro query che sarà il form
  function fetchSeries(query) {
    axios.get(`${BASE_URI}/search/tv?${API_KEY}&query=${query}`)
      .then(res => {
        setSeries(res.data.results)
      })
      .catch(err => {
        console.error('Issues in series search:', err)
      })
  }

  return (
    <>
      <BoolflixContext.Provider value={{ movies, fetchMovies, series, fetchSeries }}>
        <BoolflixMain />
      </BoolflixContext.Provider>
    </>
  )
}

export default App
