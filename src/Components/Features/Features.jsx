import React from 'react';
import './features.css'

const Features = () => {
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div className='feature-card-wrapper'>
                        <div className='feature-card'>
                            <div className='feature-card-svg-image'>
                                <ion-icon name="ribbon-outline"></ion-icon>
                            </div>
                            <div>
                                <h3 className='features-title'>Premium Quality</h3>
                                <p className='features-desc'>All the clothing products are made from 100% premium quality fabric.</p>
                            </div>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-card-svg-image'>
                                <ion-icon name="lock-closed-outline"></ion-icon>
                            </div>
                            <div>
                                <h3 className='features-title'>Secure Payments</h3>
                                <p className='features-desc'>Highly Secured SSL-Protected Payment Gateway.</p>
                            </div>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-card-svg-image'>
                                <ion-icon name="return-down-back-outline"></ion-icon>
                            </div>
                            <div>
                                <h3 className='features-title'>7 Days Return</h3>
                                <p className='features-desc'>Return or exchange the orders within 7 days of delivery.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features