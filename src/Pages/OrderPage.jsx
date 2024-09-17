import ShippingMessage from '../Components/ShippingMessage/ShippingMessage'
import CartSummary from '../Components/CartSummary/CartSummary'
import Features from '../Components/Features/Features'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const OrderPage = () => {
    return (
        <>
            <ShippingMessage />
            <CartSummary />
            <Features />
            <NewsLetter />
        </>
    )
}

export default OrderPage