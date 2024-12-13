import BoolflixCard from '../BoolflixCard/BoolflixCard'

export default function ItemsList({ items = [], title = '' }) {

    return (
        <main className='bg-dark text-light'>
            <div className="container py-3">
                {items.length > 0 &&
                    <h2 className="text-center mb-4">{title}</h2>
                }
                <div className='row row-cols-4 g-2'>
                    {items.map(item =>
                        <div key={item.id}>
                            <BoolflixCard item={item} />
                        </div>
                    )
                    }
                </div>
            </div>
        </main>

    )
}
