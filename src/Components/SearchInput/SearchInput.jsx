import './searchInput.css'

const SearchInput = () => {
    return (
        <>
            <div className="search-container">
                <div className="search-box">
                    <form action="" className="search-form">
                        <input className='search-input' type="text" placeholder="Search" id="search" autoComplete="off" />
                    </form>
                    <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                </div>
            </div>
            <button className="nav-action-btn search-container-button">
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>
        </>
    )
}

export default SearchInput