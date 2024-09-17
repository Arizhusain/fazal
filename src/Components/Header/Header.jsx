import { useState, useEffect } from 'react';
import './header.css';
import SearchInput from '../SearchInput/SearchInput'
import { Link, NavLink } from 'react-router-dom';
import ClickAwayListener from '../ClickAwayListener/ClickAwayListener';
import SignIn from '../AuthComponent/SignIn';
import NameComponent from '../AuthComponent/NameComponent';
import { useApp } from '../../Context';

const Header = () => {
    const user = useApp();
    const [popup, setPopup] = useState(false);
    const [loginScreen, setLoginScreen] = useState(false);
    const [showNameComponent, setShowNameComponent] = useState(false);
    const handleProfilePopup = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        setPopup(!popup);
    }

    const handleClick = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        if (!loginScreen) handleProfilePopup();
        setLoginScreen(!loginScreen);
    }


    const handleLogout = async (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        handleProfilePopup();
        await user.appLogout();
    }

    const handleNameUpdate = () => {
        setShowNameComponent(true);
    }
    const handleNameComponentClose = () => {
        setShowNameComponent(false);
    }

    useEffect(() => {
        console.log(user?.current);
    }, [user?.current]);

    return (
        <>
            <header>
                <section className='header-wrapper'>
                    <nav className='navbar'>
                        <a className='logo' href="#1">F A Z A L</a>
                        <ul className='nav-list'>
                            <NavLink className='nav-item' to={'/'}>Home</NavLink>
                            <NavLink className='nav-item' to={'/products'}>New Arrivals</NavLink>
                            <Link className='nav-item' to={'/products'}>Shirts</Link>
                            <Link className='nav-item' to={'/products'}>T-Shirts</Link>
                            <Link className='nav-item' to={'/myorders'}>Orders</Link>
                        </ul>
                        <ul className="nav-action-list">
                            <li>
                                <SearchInput />
                            </li>
                            <li>
                                <button className="nav-action-btn" onClick={handleProfilePopup}>
                                    <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                                </button>
                                {popup ?
                                    <ClickAwayListener onClickAway={handleProfilePopup}>
                                        <ul className='header-profile-action-container'>
                                            {
                                                !user?.current ? <li><Link className='header-profile-action-link' onClick={handleClick}>Login</Link></li>
                                                    :
                                                    <>
                                                        <li><Link className='header-profile-action-link' to={'/profile'}>Profile</Link></li>
                                                        <li><Link className='header-profile-action-link' onClick={handleLogout}>Logout</Link></li>
                                                    </>
                                            }
                                        </ul>
                                    </ClickAwayListener> : null}
                            </li>
                            <li>
                                <Link to={'/wishlist'}>
                                    <button className="nav-action-btn">
                                        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                                        <data className="nav-action-badge" value="5" aria-hidden="true">5</data>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/cart'}>
                                    <button className="nav-action-btn">
                                        <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                                        <data className="nav-action-badge" value="4" aria-hidden="true">4</data>
                                    </button>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </section>
            </header>
            {loginScreen ? <SignIn handleClick={handleClick} handleNameUpdate={handleNameUpdate} /> : null}
            {showNameComponent ? <NameComponent handleNameComponentClose={handleNameComponentClose}/> : null}
        </>
    )
}

export default Header