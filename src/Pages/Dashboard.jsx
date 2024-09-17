import React from 'react';
import './pages.css';
import DashboardLinks from '../Components/DashboardLinks/DashboardLinks'
import DashboardContentProfile from '../Components/DashboardContent/DashboardContentProfile';
import DashboardContentOrder from '../Components/DashboardContent/DashboardContentOrder';
import DashboardContentWishlist from '../Components/DashboardContent/DashboardContentWishlist';
import DashboardContentReturns from '../Components/DashboardContent/DashboardContentReturns';
import DashboardContentAddress from '../Components/DashboardContent/DashboardContentAddress';
import DashboardLogin from '../Components/DashboardContent/DashboardLogin';
import { useApp } from '../Context';

const Dashboard = ({ pageType }) => {
    const user = useApp();
    const Wrapper = () => {
        if (pageType === 'profile') {
            return <DashboardContentProfile />
        } else if (pageType === 'returns') {
            return <DashboardContentReturns />
        } else if (pageType === 'myorders') {
            return <DashboardContentOrder />
        } else if (pageType === 'wishlist') {
            return <DashboardContentWishlist />
        } else if (pageType === 'address') {
            return <DashboardContentAddress />
        }
    }
    return (
        <>
            <div>
                <section className='container'>
                    <div className='dashboard-container'>
                        <DashboardLinks />
                        <div className='dashboard-wrapper-content'>
                            {user?.current ? Wrapper() : <DashboardLogin />}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Dashboard