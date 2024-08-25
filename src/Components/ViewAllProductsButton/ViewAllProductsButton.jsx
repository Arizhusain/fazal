import React from 'react'
import './viewAllProductsButton.css'
import { VIEW_ALL_PRODUCTS } from '../../constants'

const ViewAllProductsButton = () => {
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div className='button-wrapper'>
                        <a href="#1" className='view-all-button'>
                            <span>{VIEW_ALL_PRODUCTS}</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ViewAllProductsButton