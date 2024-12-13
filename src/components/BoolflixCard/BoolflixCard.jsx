import style from './BoolflixCard.module.css'
import StarsVote from '../StarsVote/StarsVote'
import languageToFlag from '../Flags/Flag'
import cardPlaceholder from '../../assets/card-placeholder.jpg'
import defaultFlag from '../../assets/flags/placeholder.webp'

// path immagini
import { BASE_IMG_PATH } from '../../config'
import { IMG_SIZE } from '../../config'
import { useState } from 'react'


export default function BoolflixCard({ item = {} }) {

    // destrutturo dinamicamente item per dare le props che contiene sia movies e tv series
    const { poster_path, title, original_title, original_language, vote_average, overview } = item

    // variabile per definire lo stato dell'hover
    const [hover, setHover] = useState(false)

    return (
        <div className="col">
            <div
                className='card h-100 d-flex flex-column position-relative overflow-y-auto'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ backgroundImage: `url(${poster_path ? `${BASE_IMG_PATH}${IMG_SIZE}${poster_path}` : cardPlaceholder})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '1/2' }}
            >
                {hover &&
                    <>
                        <div className=''>
                            <div className={style.card_content}>
                                <h3 className="card-title">{title}</h3>
                                <h4 className="card-subtitle mt-3 text-muted mb-2">{original_title}</h4>
                                <div className='card-text'>
                                    <StarsVote voteAverage={vote_average} />
                                </div>
                                <figure>
                                    <img src={languageToFlag[original_language] || defaultFlag}
                                        alt={original_language}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                    <p className="card-text mt-2">{original_language}</p>
                                </figure>
                                <p>{overview}</p>
                            </div>
                        </div>

                    </>
                }
            </div>
        </div >
    )
}



{/* quando il valore della string è uguale alla chiave dell'oggetto, legge la sua proprietà cioè l'SRC  */ }


