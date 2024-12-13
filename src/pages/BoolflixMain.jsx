import ItemsList from '../components/ItemsList/ItemsList.jsx'
import { useContext } from 'react'
import BoolflixContext from '../contexts/BoolflixContext.js'


export default function BoolflixMain() {

    const { movies, series } = useContext(BoolflixContext)

    return (
        <>
            <ItemsList items={movies} title='Movies' />
            <ItemsList items={series} title='Series' />
        </>
    )
}