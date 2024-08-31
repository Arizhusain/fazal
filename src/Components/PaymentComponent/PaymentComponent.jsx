import React from 'react';
import './paymentComponent.css'

const PaymentComponent = ({ enableCheckoutOption, handlePaymentOptionSelect }) => {
    return (
        <>
            <div>
                <label>
                    <input type="radio" value="COD" name="COD" id="COD" checked={enableCheckoutOption} onChange={handlePaymentOptionSelect}/>
                    <span>Cash on Delivery</span>
                </label>
            </div>
        </>
    )
}

export default PaymentComponent