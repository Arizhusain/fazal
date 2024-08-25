import React from 'react'
import logo from '../../assets/images/logo.svg'

const Header = () => {
    return (
        <header class="header" data-header>
            <div class="container">

                <div class="overlay" data-overlay></div>

                <a href="#" class="logo">
                    <h1 style={{ color: '#6b6b6b' }}>F A Z A L</h1>
                </a>

                <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <nav class="navbar" data-navbar>

                    <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <a href="#" class="logo">
                        <img src={logo} width="190" height="50" alt="Footcap logo" />
                    </a>

                    <ul class="navbar-list">

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">Home</a>
                        </li>

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">About</a>
                        </li>

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">Products</a>
                        </li>

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">Shop</a>
                        </li>

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">Blog</a>
                        </li>

                        <li class="navbar-item">
                            <a href="#" class="navbar-link">Contact</a>
                        </li>

                    </ul>

                    <ul class="nav-action-list">

                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>

                                <span class="nav-action-text">Search</span>
                            </button>
                        </li>

                        <li>
                            <a href="#" class="nav-action-btn">
                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                <span class="nav-action-text">Login / Register</span>
                            </a>
                        </li>

                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                                <span class="nav-action-text">Wishlist</span>

                                <data class="nav-action-badge" value="5" aria-hidden="true">5</data>
                            </button>
                        </li>

                        <li>
                            <button class="nav-action-btn">
                                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>

                                <data class="nav-action-text" value="318.00">Basket: <strong>$318.00</strong></data>

                                <data class="nav-action-badge" value="4" aria-hidden="true">4</data>
                            </button>
                        </li>

                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header