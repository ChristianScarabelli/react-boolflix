import { useContext } from "react"
import BoolflixContext from "../../contexts/BoolflixContext"
import BoolflixCard from "../BoolflixCard/BoolflixCard"

export default function Movies() {

    // recupero dal context i movies
    const { movies } = useContext(BoolflixContext)


    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Movies</h2>
            <div className="row">
                {movies &&
                    movies.map((movie) => {
                        <BoolflixCard key={item.id} item={movie} />
                    })
                }
            </div>
        </div>
    )
}