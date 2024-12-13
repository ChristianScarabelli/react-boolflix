// bandiere
import deFlag from '../../assets/flags/de.png'
import esFlag from '../../assets/flags/es.png'
import frFlag from '../../assets/flags/fr.png'
import itFlag from '../../assets/flags/it.png'
import jaFlag from '../../assets/flags/ja.png'
import ukFlag from '../../assets/flags/uk.png'
import usFlag from '../../assets/flags/us.png'

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

export default languageToFlag