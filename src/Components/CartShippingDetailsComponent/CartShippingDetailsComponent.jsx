import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './cartShippingDetailsComponent.css'

const CartShippingDetailsComponent = ({ cartHandling, enableCheckoutOption }) => {
    return (
        <>
            <div className='CartShippingDetailsComponent-main-container'>
                <div>
                    <h2>Price Details</h2>
                    <div className='CartShippingDetailsComponent-list'>
                        <span>Total MRP</span>
                        <span>₹2996.00</span>
                    </div>
                    <div className='CartShippingDetailsComponent-list'>
                        <span>TREND7</span>
                        <span className='CartShippingDetailsComponent-coupon'>- ₹209.72</span>
                    </div>
                    <div className='CartShippingDetailsComponent-list'>
                        <span>Delivery</span>
                        <span>₹100.00 Free Delivery</span>
                    </div>
                    <hr className='price-horizontal-line' />
                    <div className='CartShippingDetailsComponent-list'>

                        <a className='CartShippingDetailsComponent-list-coupon' href="#1">
                            <span>
                                <ion-icon name="fast-food"></ion-icon><span>Apply Coupon</span>
                            </span>
                            <span>
                                <ion-icon name="chevron-forward"></ion-icon>
                            </span>
                        </a>
                    </div>
                    <hr className='price-horizontal-line' />
                    <div className='CartShippingDetailsComponent-list'>
                        <span>Total Amount</span>
                        <p className='CartShippingDetailsComponent-subtotal'>₹2786.28</p>
                    </div>
                    <div className='CartShippingDetailsComponent-list'>
                        <span>UPI & Cards Accepted</span>
                    </div>
                    <div className={`CartShippingDetailsComponent-list ${!enableCheckoutOption ? 'not-allowed' : ''}`}>
                        {cartHandling ?
                            <Link to={'/order'} className='CartShippingDetailsComponent-checkout-button'>
                                CHECKOUT
                            </Link>
                            :
                            <Link to={'/ordersuccessfull'} className={`CartShippingDetailsComponent-checkout-button ${!enableCheckoutOption ? 'CartShippingDetailsComponent-checkout-button-disabled' : ''}`}>
                                PLACE ORDER
                            </Link>}
                    </div>
                </div>
            </div >
        </>
    )
}

CartShippingDetailsComponent.propTypes = {
    cartHandling: PropTypes.bool, 
    enableCheckoutOption: PropTypes.bool
};

export default CartShippingDetailsComponent