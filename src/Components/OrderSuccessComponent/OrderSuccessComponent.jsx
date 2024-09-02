/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import './orderSuccessComponent.css'

const OrderSuccessComponent = () => {
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, [])
    return (
        <>
            <div className='container'>
                <div className='OrderSuccessComponent-container'>
                    <div className='OrderSuccessComponent-wrapper'>
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                        <p>Hey Arifhusain</p>
                        <h2>Your order is confirmed</h2>
                        <p>We'll send you a shipping confirmation email as soon as your order ships.</p>
                        <span>Thank you!</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSuccessComponent