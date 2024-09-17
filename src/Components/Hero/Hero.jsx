import { useState } from 'react';
import './hero.css';
import { corosalImage } from '../../demo';

const Hero = () => {
    const [screenNumber, setScreenNumber] = useState(0);
    const handleIncrement = (e) => {
        e.preventDefault();
        if (screenNumber === corosalImage.length - 1) {
            setScreenNumber(0);
        } else {
            setScreenNumber(screenNumber + 1);
        }
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        if (screenNumber === 0) {
            setScreenNumber(corosalImage.length - 1);
        } else {
            setScreenNumber(screenNumber - 1);
        }
    }
    const handleImageSelection = (e, i) => {
        e.preventDefault();
        setScreenNumber(i);
    }
    return (
        <>
            <section>
                <div className="slideshow-container">
                    {
                        corosalImage.map((item, index) => (
                            <div key={index} className="slide-image" style={{ display: (screenNumber === index) ? 'block' : 'none' }}>
                                <img className='hero-slider-image' src={item} alt="hero" />
                            </div>
                        ))
                    }
                    <a href='#1' className="arrow-button prev" onClick={handleDecrement}><ion-icon name="caret-back-outline"></ion-icon></a>
                    <a href='#1' className="arrow-button next" onClick={handleIncrement}><ion-icon name="caret-forward-outline"></ion-icon></a>
                    <div className='dot-container'>
                        {
                            corosalImage.map((item, index) => (
                                <span key={index} className="dot" style={{ backgroundColor: (screenNumber === index) ? 'black' : '#bbb' }} onClick={(e) => handleImageSelection(e, index)}></span>
                            ))

                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero