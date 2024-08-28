import React from 'react'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ShoppingList from '../Components/ShoppingList/ShoppingList'
import Features from '../Components/Features/Features'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const ProductListing = () => {
    return (
        <>
            <BreadCrumb />
            <ShoppingList />
            <Features />
            <NewsLetter />
        </>
    )
}

export default ProductListing