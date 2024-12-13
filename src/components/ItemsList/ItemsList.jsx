import BoolflixCard from '../BoolflixCard/BoolflixCard'

export default function ItemsList({ items = [], title = '' }) {

    return (
        <div className="container my-4">
            {items.length > 0 &&
                <h2 className="text-center mb-4">{title}</h2>
            }
            <div className='row row-cols-4 row-gap-2'>
                {items.map(item =>
                    <div key={item.id}>
                        <BoolflixCard item={item} />
                    </div>
                )
                }
            </div>
        </div>
    )
}
