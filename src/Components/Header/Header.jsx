import React from 'react';
import './header.css';
import SearchInput from '../SearchInput/SearchInput'

const Header = () => {
    return (
        <header>
            <section className='header-wrapper'>
                <nav className='navbar'>
                    <a className='logo' href="#1">F A Z A L</a>
                    <ul className='nav-list'>
                        <li ><a href='#1' className='nav-item active'>Home</a></li>
                        <li ><a href='#1' className='nav-item'>New Arrivals</a></li>
                        <li ><a href='#1' className='nav-item'>Shirts</a></li>
                        <li ><a href='#1' className='nav-item'>T-Shirts</a></li>
                        <li ><a href='#1' className='nav-item'>Track order</a></li>
                    </ul>
                    <ul class="nav-action-list">
                        <li>
                            <SearchInput />
                        </li>
                        <li>
                            <a href="#1" class="nav-action-btn">
                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                                <data class="nav-action-badge" value="5" aria-hidden="true">5</data>
                            </button>
                        </li>
                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                                <data class="nav-action-badge" value="4" aria-hidden="true">4</data>
                            </button>
                        </li>

                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header