import { useContext, useEffect, useState } from 'react'
import BoolflixContext from '../../contexts/BoolflixContext'
import BoolflixCard from '../BoolflixCard/BoolflixCard'

export default function Movies() {
    // Recupero dal context i movies
    const { movies } = useContext(BoolflixContext)

    // variabile per far comparire il titolo risultati solo dopo la ricerca
    // false di default perchè ancora non è stata fatta la chiamata
    const [searched, setSearched] = useState(false)

    // al cambio di movies (la ricerca) se da risultati stampo il titolo settando la sua variabile
    useEffect(() => {
        if (movies && movies.length > 0) {
            setSearched(true)
        }
    }, [movies])

    return (
        <div className="container my-4">
            <div className="row">
                {searched && <h2 className="text-center mb-4">Results</h2>}
                {movies && movies.length > 0 ?
                    (movies.map((movie) => (
                        <BoolflixCard key={movie.id} item={movie} />))
                    ) : (searched && <p className="text-center">No movies found.</p>
                    )}
            </div>
        </div>
    )
}
