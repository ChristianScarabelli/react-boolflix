import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URI } from './baseUrl'
import { API_KEY } from './apiKey'
import BoolflixContext from './contexts/BoolflixContext'
import BoolflixMain from './pages/BoolflixMain'


function App() {

  return (
    <>
      <BoolflixContext.Provider value={{}}>
        <BoolflixMain />
      </BoolflixContext.Provider>
    </>
  )
}

export default App
