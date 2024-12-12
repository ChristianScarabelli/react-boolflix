import { useContext } from "react"
import BoolflixContext from "../../contexts/BoolflixContext"

// bandiere
import deFlag from '../../assets/flags/de.png'
import esFlag from '../../assets/flags/es.png'
import frFlag from '../../assets/flags/fr.png'
import itFlag from '../../assets/flags/it.png'
import jaFlag from '../../assets/flags/ja.png'
import ukFlag from '../../assets/flags/uk.png'
import usFlag from '../../assets/flags/us.png'
import defaultFlag from '../../assets/flags/placeholder.webp'

export default function Movies() {

    // recupero dal context i movies
    const { movies } = useContext(BoolflixContext)

    // converto la stringa della lingua nella bandiera immagine corrispondente in un oggetto
    const languageToFlag = {
        de: deFlag,
        es: esFlag,
        fr: frFlag,
        it: itFlag,
        ja: jaFlag,
        en: ukFlag,
        us: usFlag,
    }

    return (
        <div className="container">
            <h2 className="text-center">Movies</h2>
            <ul>
                {movies &&
                    movies.map((movie) =>
                        <li key={movie.id}>
                            <div>{`Title: ${movie.title}`}</div>
                            <div>{`Original title: ${movie.original_title}`}</div>
                            <div>{`Language:`}
                                <img
                                    src={languageToFlag[movie.original_language] || defaultFlag}
                                    alt={movie.original_language}
                                    className="img-fluid"
                                />
                            </div>
                            <div>{`Vote: ${movie.vote_average}`}</div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}