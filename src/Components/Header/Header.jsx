import React, { useState } from 'react';
import './header.css';
import SearchInput from '../SearchInput/SearchInput'
import { Link, NavLink } from 'react-router-dom';
import ClickAwayListener from '../ClickAwayListener/ClickAwayListener';

const Header = () => {
    const [popup, setPopup] = useState(false);
    const handleProfilePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPopup(!popup);
    }
    return (
        <header>
            <section className='header-wrapper'>
                <nav className='navbar'>
                    <a className='logo' href="#1">F A Z A L</a>
                    <ul className='nav-list'>
                        <NavLink className='nav-item' to={'/'}>Home</NavLink>
                        <NavLink className='nav-item' to={'/products'}>New Arrivals</NavLink>
                        <Link className='nav-item' to={'/products'}>Shirts</Link>
                        <Link className='nav-item' to={'/products'}>T-Shirts</Link>
                        <Link className='nav-item' to={'/track-order'}>Track order</Link>
                    </ul>
                    <ul class="nav-action-list">
                        <li>
                            <SearchInput />
                        </li>
                        <li>
                            <button class="nav-action-btn" onClick={handleProfilePopup}>
                                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                            </button>
                            {popup ?
                                <ClickAwayListener onClickAway={handleProfilePopup}>
                                    <ul className='header-profile-action-container'>
                                        <li><Link className='header-profile-action-link' to={'/profile'}>Profile</Link></li>
                                        <li><Link className='header-profile-action-link' to={'/logout'}>Logout</Link></li>
                                    </ul>
                                </ClickAwayListener> : null}
                        </li>
                        <li>
                            <Link to={'/wishlist'}>
                                <button class="nav-action-btn">
                                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                                    <data class="nav-action-badge" value="5" aria-hidden="true">5</data>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/cart'}>
                                <button class="nav-action-btn">
                                    <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                                    <data class="nav-action-badge" value="4" aria-hidden="true">4</data>
                                </button>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header