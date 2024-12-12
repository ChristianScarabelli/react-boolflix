import { useState, useContext, useEffect } from "react"
import BoolflixContext from "../../contexts/BoolflixContext"

export default function SearchBar() {

    // variabile di stato per la query string
    const [query, setQuery] = useState('')

    // importo funzione per chiamata dei movies dal context
    const { fetchMovies } = useContext(BoolflixContext)

    // funzione per gestire il form
    function handleSearch(event) {
        event.preventDefault()
        fetchMovies(query)
    }

    return (
        <main>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleSearch}>
                    <div className="d-flex align-items-center gap-2">
                        <button>Search</button>
                        <label htmlFor="search"></label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            className="form-control"
                            placeholder="Search movies..."
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                </form>
            </div>
        </main>
    )
}