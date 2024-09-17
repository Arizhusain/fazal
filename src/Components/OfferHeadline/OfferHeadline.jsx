import { useState } from 'react'
import './offerHeadline.css'

const OfferHeadline = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            {show ?
                <section className='offer-headline-wrapper'>
                    <div className='offer-headline-text-slider'>
                        <p className='offer-headline-text'>Free Shipping on Orders above ₹1299</p>
                    </div>
                    <button className='slider-close-button' onClick={() => setShow(false)}>
                        <ion-icon name="close" aria-hidden="true"></ion-icon>
                    </button>
                </section> : null
            }
        </>
    )
}

export default OfferHeadline