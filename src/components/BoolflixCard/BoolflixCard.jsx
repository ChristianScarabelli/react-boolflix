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
        <div>
            <div
                className='card h-100 d-flex flex-column overflow-y-auto position-relative'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ backgroundImage: `url(${poster_path ? `${BASE_IMG_PATH}${IMG_SIZE}${poster_path}` : cardPlaceholder})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '1/2' }}
            >
                {hover &&
                    <>
                        <div className={style.overlay}>
                            <div className='p-2'>
                                <p className="fs-4 card-title">{`Title: ${title}`}</p>
                                <p className="fs-5 card-subtitle mt-3 mb-2">{`Original Title: ${original_title}`}</p>
                                <div className='d-flex gap-2'>
                                    <p>Ratings</p>
                                    <StarsVote voteAverage={vote_average} />
                                </div>
                                <figure className='d-flex align-items-center gap-2'>
                                    {/* quando il valore della string è uguale alla chiave dell'oggetto, legge la sua proprietà cioè l'SRC  */}
                                    <img src={languageToFlag[original_language] || defaultFlag}
                                        alt={original_language}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                    <p className="card-text">{`Original Language: ${original_language}`}</p>
                                </figure>
                                {/* controlli: se overview è una stringa e trimmata non è stringa vuota,
                                renderizzo la proprietà */}
                                {overview && typeof (overview) === 'string' && overview.trim() !== '' && (<p>{`Overview: ${overview}`}</p>)}
                            </div>
                        </div>

                    </>
                }
            </div>
        </div >
    )
}





