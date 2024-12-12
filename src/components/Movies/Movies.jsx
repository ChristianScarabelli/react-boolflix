import { useContext } from "react"
import BoolflixContext from "../../contexts/BoolflixContext"

export default function Movies() {

    // recupero dal context i movies
    const { movies } = useContext(BoolflixContext)

    return (
        <div className="container">
            <h2 className="text-center">Movies</h2>
            <ul>
                {movies &&
                    movies.map((movie) =>
                        <li key={movie.id}>
                            <div>{`Title: ${movie.title}`}</div>
                            <div>{`Original title: ${movie.original_title}`}</div>
                            <div>{`Language: ${movie.original_language}`}</div>
                            <div>{`Vote: ${movie.vote_average}`}</div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}