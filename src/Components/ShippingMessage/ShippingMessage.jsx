import React from 'react';
import './shippingMessage.css'

const ShippingMessage = () => {
    return (
        <>
            <div className='margin-top'>
                <section className='container'>
                    <div className='ShippingMessage-container'>
                        <ion-icon name="rocket-outline"></ion-icon>
                        <h1>Hurray! your order is eligible for <span>Free Shipping!</span></h1>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ShippingMessage