// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// le inizializzzo subito come un oggetto così do un nome diverso perchè hanno lo stesso 
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

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

{/* < FontAwesomeIcon icon = { solidStar } />
<FontAwesomeIcon icon={regularStar} /> */}


export default function BoolflixCard({ item = {} }) {

    // destrutturo dinamicamente item per dare le props che contiene sia movies e tv series
    const { poster_path, title, name, original_title, original_name, original_language, vote_average } = item

    // creo variabili per determinare se un dato viene dall'oggetto movies o da tv series
    // se non arriva il dato di uno metto l'altro valore
    const displayTitle = title || name
    const displayOriginalTitle = original_title || original_name

    // STARS VOTE
    // arrotondo e divido per 2 il voto arrivato dall'api (), cioè le stelle piene totali
    const fullStarsCount = Math.ceil(vote_average / 2)
    // conteggio stelle vuote
    const emptyStarsCount = 5 - fullStarsCount

    // creo l'array con le stelle piene e lo riempio con l'icona per ogni elemento che finirà nell'array
    const fullStars = new Array(fullStarsCount).fill(solidStar)
    // creo l'array con le stelle vuote
    const emptyStars = new Array(emptyStarsCount).fill(regularStar)
    console.log(fullStars)


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
                    <div className='card-text'>
                        {/* array.from da elementi undefined, quindi passo _ come variabile singola del map
                        uso l'indice per dare la key */}
                        {fullStars.map((icon, index) =>
                            < FontAwesomeIcon key={index} icon={icon} />)

                        }
                        {emptyStars.map((icon, index) =>
                            < FontAwesomeIcon key={index} icon={icon} />)

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}