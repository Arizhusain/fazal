import React from 'react'
import './searchInput.css'

const SearchInput = () => {
    return (
        <div class="search-container">
            <div class="search-box">
                <form action="" class="search-form">
                    <input className='search-input' type="text" placeholder="Search" id="search" autocomplete="off" />
                </form>
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </div>
        </div>
    )
}

export default SearchInput