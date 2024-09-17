import PropTypes from 'prop-types';
import ShippingMessage from '../Components/ShippingMessage/ShippingMessage'
import CartSummary from '../Components/CartSummary/CartSummary'
import Features from '../Components/Features/Features'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const CartPage = ({ cartHandling }) => {
    return (
        <>
            <ShippingMessage />
            <CartSummary cartHandling={cartHandling}/>
            <Features />
            <NewsLetter />
        </>
    )
}

CartPage.propTypes = {
    cartHandling: PropTypes.string
};

export default CartPage