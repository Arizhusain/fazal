import { useState } from 'react'
import './productDetails.css'
import CheckboxColorIcon from '../FiltersSidebar/CheckboxColorIcon'
import SizeBox from './SizeBox'
import { colors, corosalImage, sizes } from '../../demo'

const ProductDetails = () => {
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [screenNumber, setScreenNumber] = useState(0);
    const maxSize = 10;

    const handleClick = (selectedSize) => {
        setSize(selectedSize);
    }

    const handleImageSelection = (e, i) => {
        e.preventDefault();
        setScreenNumber(i);
    }
    const handleIncrement = (e) => {
        e.preventDefault();
        if (screenNumber === corosalImage.length - 1) {
            setScreenNumber(0);
        } else {
            setScreenNumber(screenNumber + 1);
        }
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        if (screenNumber === 0) {
            setScreenNumber(corosalImage.length - 1);
        } else {
            setScreenNumber(screenNumber - 1);
        }
    }
    return (
        <section className='margin-top margin-bottom'>
            <div className='container'>
                <div className='product-list-container'>
                    <div className='product-list-filter'>
                        <div className='productDetails-image-container'>
                            <div className='productDetails-image-wrapper'>
                                <img className='productDetails-image-wrapper-innerimg' src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1030910.jpg?aio=w-384" alt="" />
                                <img className='productDetails-image-wrapper-innerimg' src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1030910.jpg?aio=w-384" alt="" />
                                <img className='productDetails-image-wrapper-innerimg' src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1030910.jpg?aio=w-384" alt="" />
                            </div>
                            <div className='productDetails-main-image-container'>
                                <img className='productDetails-main-image' src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1030910.jpg?aio=w-384" alt="" />
                                <a href='#1' className="arrow-button prev" onClick={handleDecrement}><ion-icon name="caret-back-outline"></ion-icon></a>
                                <a href='#1' className="arrow-button next" onClick={handleIncrement}><ion-icon name="caret-forward-outline"></ion-icon></a>
                                <div className='dot-container'>
                                    {
                                        corosalImage.map((item, index) => (
                                            <span key={index} className="dot" style={{ backgroundColor: (screenNumber === index) ? 'black' : '#bbb' }} onClick={(e) => handleImageSelection(e, index)}></span>
                                        ))

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-list-products'>
                        <h1 className='productDetails-header'>Pista Regular Fit Half Sleeves T-Shirt</h1>
                        <h2 className='productDetails-header-price'>₹699</h2>
                        <p className='productDetails-header-tag'>Inclusive of all taxes</p>
                        <div className='productDetails-padding-bottom'>
                            <div className='productDetails-header-label'>More Colors</div>
                            <ul className='productDetails-header-colors'>
                                {
                                    colors.map((item, index) => (
                                        <CheckboxColorIcon key={index} item={item} />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='productDetails-padding-bottom'>
                            <div className='productDetails-header-label'>Select Size</div>
                            <ul className='productDetails-header-colors'>
                                {
                                    sizes.map((item, index) => (
                                        <SizeBox key={index} item={item} size={size} onSizeSelect={handleClick} />
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='productDetails-padding-bottom'>
                            <div className='productDetails-header-label'>Quantity</div>
                            <div className='productDetails-button-wrapper'>
                                <button className='productDetails-button' disabled={quantity === 1} onClick={() => setQuantity(pre => pre - 1)}>-</button>
                                <span className='productDetails-header-label'>{quantity}</span>
                                <button className='productDetails-button' disabled={quantity === maxSize} onClick={() => setQuantity(pre => pre + 1)}>+</button>
                            </div>
                        </div>
                        <div className='productDetails-button-wrapper'>
                            <button className='productDetails-wishlist-button'>Add to wishlist</button>
                            <button className='productDetails-addtocart-button'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails