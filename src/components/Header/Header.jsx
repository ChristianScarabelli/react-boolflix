import SearchBar from '../SearchBar/SearchBar.jsx'
import NetflixLogo from '../../assets/netflix-logo.svg'

export default function Header() {
    return (
        <>
            <header className='bg-dark text-light'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <figure>
                            <img style={{ height: 'auto', width: '100px', display: 'block' }} src={NetflixLogo} alt="" />
                        </figure>
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    )
}