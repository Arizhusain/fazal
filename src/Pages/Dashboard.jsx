import React from 'react';
import './pages.css';
import DashboardLinks from '../Components/DashboardLinks/DashboardLinks'
import DashboardContentProfile from '../Components/DashboardContent/DashboardContentProfile';
import DashboardContentOrder from '../Components/DashboardContent/DashboardContentOrder';
import DashboardContentWishlist from '../Components/DashboardContent/DashboardContentWishlist';
import DashboardContentReturns from '../Components/DashboardContent/DashboardContentReturns';
import DashboardContentAddress from '../Components/DashboardContent/DashboardContentAddress';

const Dashboard = ({ pageType }) => {
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
                            {Wrapper()}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Dashboard