import { useContext, useEffect, useState } from 'react'
import BoolflixContext from '../../contexts/BoolflixContext'
import BoolflixCard from '../BoolflixCard/BoolflixCard'

export default function Series() {
    // Recupero dal context le series
    const { series } = useContext(BoolflixContext)

    // variabile per far comparire il titolo risultati solo dopo la ricerca
    // false di default perchè ancora non è stata fatta la chiamata
    const [searched, setSearched] = useState(false)

    // al cambio di series (la ricerca) se da risultati stampo il titolo settando la sua variabile
    useEffect(() => {
        if (series && series.length > 0) {
            setSearched(true)
        }
    }, [series])

    return (
        <div className="container my-4">
            {searched && <h2 className="text-center mb-4">Results</h2>}
            <div className="row">
                {series && series.length > 0 ?
                    (series.map((serie) => (
                        <BoolflixCard key={serie.id} item={serie} />))
                    ) : (searched && <p className="text-center">No series found.</p>
                    )}
            </div>
        </div>
    )
}
