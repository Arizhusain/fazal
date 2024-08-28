import React, { useState } from 'react'
import './productDetails.css'
import CheckboxColorIcon from '../FiltersSidebar/CheckboxColorIcon'
import SizeBox from './SizeBox'
import { colors, sizes } from '../../demo'

const ProductDetails = () => {
    const [size, setSize] = useState('');
    const handleClick = (selectedSize) => {
        setSize(selectedSize);
    }
    return (
        <section className='margin-top margin-bottom'>
            <div className='container'>
                <div className='product-list-container'>
                    <div className='product-list-filter'>
                        <div className='productDetails-image-container'>
                            <img src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1030910.jpg?aio=w-384" alt="" />
                        </div>
                    </div>
                    <div className='product-list-products'>
                        <h1 className='productDetails-header'>Pista Regular Fit Half Sleeves T-Shirt</h1>
                        <h2 className='productDetails-header-price'>₹699</h2>
                        <p className='productDetails-header-tag'>Inclusive of all taxes</p>
                        <div className='productDetails-header-label'>More Colors</div>
                        <ul className='productDetails-header-colors'>
                            {
                                colors.map((item) => (
                                    <CheckboxColorIcon item={item} />
                                ))
                            }
                        </ul>
                        <div className='productDetails-header-label'>Select Size</div>
                        <ul className='productDetails-header-colors'>
                            {
                                sizes.map((item) => (
                                    <SizeBox item={item} size={size} onSizeSelect={handleClick} />
                                ))
                            }
                        </ul>
                        <div className='productDetails-header-label'>Quantity</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails