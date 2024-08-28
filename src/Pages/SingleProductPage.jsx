import React from 'react'
import ProductDetails from '../Components/ProductDetails/ProductDetails'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Features from '../Components/Features/Features'
import ProductList from '../Components/ProductList/ProductList'
import CategoryHeading from '../Components/CategoryHeading/CategoryHeading'

const SingleProductPage = () => {
    return (
        <>
            <ProductDetails />
            <div style={{ textAlign: 'center' }}>
                <CategoryHeading categoryHeading="Similar products" />
            </div>
            <ProductList />
            <Features />
            <NewsLetter />
        </>
    )
}

export default SingleProductPage