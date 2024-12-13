import { useState, useContext, useEffect } from "react"
import BoolflixContext from "../../contexts/BoolflixContext"

export default function SearchBar() {

    // importo le funzioni e la query con il setter dal context
    const { fetchMovies, fetchSeries, query, setQuery } = useContext(BoolflixContext)

    // funzione per settare il value della query
    function onChange(event) {
        setQuery(event.target.value)
    }

    // funzione per gestire il form
    function handleSearch(event) {
        event.preventDefault()
        fetchMovies(query)
        fetchSeries(query)
    }

    return (
        <main>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleSearch}>
                    <div className="d-flex align-items-center gap-2">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            className="form-control"
                            placeholder="Search movies and series..."
                            value={query}
                            onChange={onChange}
                        />
                        <button className="btn btn-light">Search</button>
                    </div>
                </form>
            </div>
        </main>
    )
}