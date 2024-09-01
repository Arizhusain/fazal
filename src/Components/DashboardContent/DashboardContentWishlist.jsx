import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './dashboardContent.css'

const DashboardContentWishlist = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='DashboardContent-profile-heading'>My Wishlist</h2>
                </div>
                <div className='DashboardContentWishlist-card-container'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div >
        </>
    )
}

export default DashboardContentWishlist