export default function SearchBar() {
    return (

        <main>
            <div className="d-flex justify-content-center align-items-center">
                <form>
                    <div className="d-flex align-items-center gap-2">
                        <button>Search</button>
                        <label htmlFor="search"></label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            className="form-control"
                            placeholder="Search movies..."
                        />
                    </div>
                </form>
            </div>
        </main>

    )
}