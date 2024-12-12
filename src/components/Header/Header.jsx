import SearchBar from '../SearchBar/SearchBar.jsx'

export default function Header() {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1>space for logo</h1>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}