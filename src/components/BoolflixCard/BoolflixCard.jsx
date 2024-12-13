import StarsVote from '../StarsVote/StarsVote'
import languageToFlag from '../Flags/Flag'
import cardPlaceholder from '../../assets/card-placeholder.jpg'
import defaultFlag from '../../assets/flags/placeholder.webp'

// path immagini
import { BASE_IMG_PATH } from '../../config'
import { IMG_SIZE } from '../../config'


export default function BoolflixCard({ item = {} }) {

    // destrutturo dinamicamente item per dare le props che contiene sia movies e tv series
    const { poster_path, title, original_title, original_language, vote_average } = item

    return (
        <div className="col">
            <div className="card h-100 d-flex flex-column">
                <figure>
                    <img src={poster_path ? `${BASE_IMG_PATH}${IMG_SIZE}${poster_path}` : cardPlaceholder}
                        alt={title} className="card-img-top" />
                </figure>
                <div className="card-body d-flex flex-column flex-grow-1">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-subtitle mt-3 text-muted mb-2">{original_title}</h4>
                    {/* quando il valore della string è uguale alla chiave dell'oggetto, legge la sua proprietà cioè l'SRC  */}
                    <figure>
                        <img src={languageToFlag[original_language] || defaultFlag}
                            alt={original_language} style={{ width: '20px', height: '20px' }} />
                        <p className="card-text mt-2">{original_language}</p>
                    </figure>
                    <div className='card-text'>
                        <StarsVote voteAverage={vote_average} />
                    </div>
                </div>
            </div>
        </div>
    )
}





