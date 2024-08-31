import React from 'react';
import './cartCardComponent.css';

const CartCardComponent = () => {
    return (
        <>
            <div>
                <section className='container'>
                    <div>
                        <div className='CartCardComponent-container'>
                            <div className='CartCardComponent-image-wrapper'><img src="https://cdn-media.powerlook.in/catalog/product/d/p/dp101-1069510.jpg?aio=w-256" alt="" /></div>
                            <div className='CartCardComponent-content-wrapper'>
                                <div className='CartCardComponent-content-container'>
                                    <div className='CartCardComponent-content-header'>
                                        <h3>Sky Blue and White Structured Striped Half Sleeves T Shirt</h3><h3>₹999</h3>
                                    </div>
                                    <p>Color: #cdcdcd</p>
                                    <p>Size: M</p>
                                    <div className='CartCardComponent-qty-wrapper'>
                                        <span>QTY</span>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                    <hr />
                                    <div className='CartCardComponent-footer-links'>
                                        <a href="#1">Remove</a>
                                        <a href="#1">Move to wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CartCardComponent