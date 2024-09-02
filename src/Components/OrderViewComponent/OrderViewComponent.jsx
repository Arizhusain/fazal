import React from 'react';
import './orderViewComponent.css'
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';
import TrackingComponent from '../TrackingComponent/TrackingComponent';

const OrderViewComponent = () => {
    return (
        <>
            <div >
                <section className='container'>
                    <div className='OrderViewComponent-container'>
                        <div>
                            <div>
                                <h2 className='OrderViewComponent-heading'>Order Details</h2>
                                <button className='OrderViewComponent-download-invoice'>Download invoice</button>
                            </div>
                            <div className='OrderViewComponent-order-date-container'>
                                <span>Ordered on  30 Aug, 2024</span>
                                <span>|</span>
                                <span>Order ID 001457962</span>
                            </div>
                            <div>
                                <OrderSummaryCard id={1} />
                                <OrderSummaryCard id={2} />
                                <OrderSummaryCard id={3} />
                                <OrderSummaryCard id={4} />
                            </div>
                            <div>
                                <div>
                                    <h3 className='OrderViewComponent-sub-heading'>Tracking</h3>
                                    <TrackingComponent />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 className='OrderViewComponent-sub-heading'>Delivery Address</h3>
                                    <div className='OrderViewComponent-delivery-address'>
                                        <p>Arif Soudagar</p>
                                        <address>501 al barakha kollikeri dharwad, near charantimath garden, Dharwad, Karnataka 580001</address>
                                        <span>Contact: 7358236715</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='OrderViewComponent-sub-heading'>Payment Method</h3>
                                    <div className='OrderViewComponent-payment-method'>
                                        <p>Cash On Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='OrderViewComponent-order-summary-container'>
                            <h3 className='OrderViewComponent-sub-heading'>Order Summary</h3>
                            <div className='OrderViewComponent-order-summary-wrapper'>
                                <div>
                                    <span>Total MRP</span>
                                    <span>₹2853.33</span>
                                </div>
                                <div>
                                    <span>Estimated Tax</span>
                                    <span>₹142.67</span>
                                </div>
                                <div>
                                    <span>Delivery</span>
                                    <span>₹0</span>
                                </div>
                                <div>
                                    <span>COD Fee</span>
                                    <span>₹60</span>
                                </div>
                                <div>
                                    <span>Order Total</span>
                                    <span>₹3056.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OrderViewComponent