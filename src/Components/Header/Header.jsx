import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <section className='header-wrapper'>
                <nav className='navbar'>
                    <a className='logo' href="#1">F A Z A L</a>
                    <ul className='nav-list'>
                        <li className='nav-item active'>New Arrivals</li>
                        <li className='nav-item'>Shirts</li>
                        <li className='nav-item'>T-Shirts</li>
                        <li className='nav-item'>Track order</li>
                    </ul>
                    <ul class="nav-action-list">
                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                            </button>
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