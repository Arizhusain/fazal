import React, { useState } from 'react';
import ShopingTotalCount from '../ShopingTotalCount/ShopingTotalCount'
import './cartSummary.css';
import CartCardComponent from '../CartCardComponent/CartCardComponent';
import CartShippingDetailsComponent from '../CartShippingDetailsComponent/CartShippingDetailsComponent';
import AddressCard from '../AddressCard/AddressCard';

const CartSummary = ({ cartHandling }) => {
    const [enableCheckoutOption, setEnableCheckoutOption] = useState(false);
    const handlePaymentOptionSelect = (e) => {
        setEnableCheckoutOption(true);
    }
    return (
        <>
            <div>
                <section className='container'>
                    <div className='CartSummary-container'>
                        <div className='CartSummary-cart-items'>
                            {
                                cartHandling ? <>
                                    <ShopingTotalCount />
                                    <CartCardComponent />
                                    <CartCardComponent />
                                    <CartCardComponent />
                                    <CartCardComponent />
                                </> :
                                    <>
                                        <div>
                                            <AddressCard enableCheckoutOption={enableCheckoutOption} handlePaymentOptionSelect={handlePaymentOptionSelect} />
                                        </div>
                                    </>
                            }
                        </div>
                        <div className='CartSummary-cart-price-details'>
                            <CartShippingDetailsComponent cartHandling={cartHandling} enableCheckoutOption={enableCheckoutOption} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CartSummary