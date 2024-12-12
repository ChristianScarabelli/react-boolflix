// bandiere
import deFlag from '../../assets/flags/de.png'
import esFlag from '../../assets/flags/es.png'
import frFlag from '../../assets/flags/fr.png'
import itFlag from '../../assets/flags/it.png'
import jaFlag from '../../assets/flags/ja.png'
import ukFlag from '../../assets/flags/uk.png'
import usFlag from '../../assets/flags/us.png'
import defaultFlag from '../../assets/flags/placeholder.webp'
import cardPlaceholder from '../../assets/card-placeholder.jpg'

// path immagini
import { BASE_IMG_PATH } from '../../config'
import { IMG_SIZE } from '../../config'

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

export default function BoolflixCard({ item = {} }) {

    // destrutturo dinamicamente item per dare le props che contiene sia movies e tv series
    const { poster_path, title, name, original_title, original_name, original_language, vote_average } = item

    // creo variabili per determinare se un dato viene dall'oggetto movies o da tv series
    // se non arriva il dato di uno metto l'altro valore
    const displayTitle = title || name
    const displayOriginalTitle = original_title || original_name

    return (
        <div className="col">
            <div className="card h-100 d-flex flex-column">
                <figure>
                    <img src={`${BASE_IMG_PATH}${IMG_SIZE}${poster_path}` || cardPlaceholder}
                        alt={displayTitle} className="card-img-top" />
                </figure>
                <div className="card-body d-flex flex-column flex-grow-1">
                    <h3 className="card-title">{displayTitle}</h3>
                    <h4 className="card-subtitle mt-3 text-muted mb-2">{displayOriginalTitle}
                    </h4> <figure> <img src={languageToFlag[original_language] || defaultFlag} alt={original_language} style={{ width: '20px', height: '20px' }} />
                    </figure>
                    <p className="card-text mt-2">{original_language}</p>
                    <p className="card-text">{vote_average}</p>
                </div>
            </div>
        </div>
    )
}