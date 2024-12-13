// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// le inizializzzo subito come un oggetto così do un nome diverso perchè hanno lo stesso 
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

export default function StarsVote({ voteAverage = 0 }) {

    // STARS VOTE
    // arrotondo e divido per 2 il voto arrivato dall'api (), cioè le stelle piene totali
    const fullStarsCount = voteAverage
    // conteggio stelle vuote
    const emptyStarsCount = 5 - fullStarsCount

    // creo l'array con le stelle piene e lo riempio con l'icona per ogni elemento che finirà nell'array
    // perchè new Array e Array.from danno elementi undefined, quindi definisco gli elementi con il fill()
    const fullStars = new Array(fullStarsCount).fill(solidStar)
    // creo l'array con le stelle vuote
    const emptyStars = new Array(emptyStarsCount).fill(regularStar)
    // console.log(fullStars)

    return (
        <div>
            {/* uso l'indice per dare la key con un prefisso, altrimenti non sono univoci*/}
            {fullStars.map((icon, index) =>
                < FontAwesomeIcon key={`full-${index}`} icon={icon} />)

            }
            {emptyStars.map((icon, index) =>
                < FontAwesomeIcon key={`empty-${index}`} icon={icon} />)

            }
        </div>
    )
}