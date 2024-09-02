import React from 'react';
import './dashboardLinks.css';
import { NavLink } from 'react-router-dom';

const DashboardLinks = () => {
    return (
        <>
            <div className='DashboardLinks-wrapper'>
                <ul className='DashboardLinks-list'>
                    <li className='DashboardLinks-list-items'>
                        <NavLink className='DashboardLinks-list-items-links' to={'/profile'}>Profile</NavLink>
                    </li>
                    <li className='DashboardLinks-list-items'>
                        <NavLink className='DashboardLinks-list-items-links' to={'/returns'}>Returns / Exchange</NavLink>
                    </li>
                    <li className='DashboardLinks-list-items'>
                        <NavLink className='DashboardLinks-list-items-links' to={'/myorders'}>My Orders</NavLink>
                    </li>
                    <li className='DashboardLinks-list-items'>
                        <NavLink className='DashboardLinks-list-items-links' to={'/wishlist'}>Wishlist</NavLink>
                    </li>
                    <li className='DashboardLinks-list-items'>
                        <NavLink className='DashboardLinks-list-items-links' to={'/address'}>Addresses</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DashboardLinks