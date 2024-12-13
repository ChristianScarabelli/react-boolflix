import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI, API_KEY } from './config'
import BoolflixContext from './contexts/BoolflixContext'
import BoolflixMain from './pages/BoolflixMain'
import Header from './components/Header/Header'


function App() {

  // variabile di stato per la query string
  const [query, setQuery] = useState('')

  // variabile di stato per i movies
  const [movies, setMovies] = useState([])

  // chiamata all'API per i movies, con parametro query che sarà il form
  // con params posso omettere ? dalla rotta
  function fetchMovies() {
    axios.get(`${BASE_URI}/search/movie`, {
      params: {
        api_key: API_KEY,
        query
      }
    })
      .then(res => {
        // converto già alla radice i numeri della metà e arrotondati
        const mappedMovies = res.data.results.map(movie => ({
          ...movie,
          vote_average: Math.ceil(movie.vote_average / 2)
        }))
        setMovies(mappedMovies)
      })
      .catch(err => console.error('Issues in movies search:', err))
  }

  // variabile di stato per le series
  const [series, setSeries] = useState([])

  // chiamata all'API per le series, con parametro api key e query (value del form)
  function fetchSeries(query) {
    axios.get(`${BASE_URI}/search/tv`, {
      params: {
        api_key: API_KEY,
        query
      }
    })
      // uniformizzo i dati in modo che siano uguali a quelli dei movies associando nuove chiavi/proprietà
      // e converto già i numeri della metà e arrotondati
      .then(res => {
        const mappedSeries = res.data.results.map(serie => {
          return {
            ...serie,
            title: serie.name,
            original_title: serie.original_name,
            vote_average: Math.ceil(serie.vote_average / 2)
          }
        })
        setSeries(mappedSeries)
      })
      .catch(err => {
        console.error('Issues in series search:', err)
      })
  }

  return (
    <>
      <BoolflixContext.Provider value={{ movies, fetchMovies, series, fetchSeries, query, setQuery }}>
        <Header />
        <BoolflixMain />
      </BoolflixContext.Provider>
    </>
  )
}

export default App
