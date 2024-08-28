import React, { useState } from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'
import './filtersSidebar.css'

const FilterPrice = () => {
    const priceGap = 1000;
    const maxPrice = 10000;
    const [value, setValue] = useState({
        min: 0,
        max: maxPrice
    });


    const handleMinChange = (e) => {
        e.preventDefault();
        if ((value.max - e.target.value) < priceGap) {
            setValue({ ...value, min: parseInt(value.max) - parseInt(priceGap) });
        } else {
            setValue({ ...value, min: parseInt(e.target.value) });
        }
    }
    const handleMaxChange = (e) => {
        e.preventDefault();
        if ((e.target.value - value.min) < priceGap) {
            setValue({ ...value, max: parseInt(value.min) + parseInt(priceGap) });
        } else {
            setValue({ ...value, max: parseInt(e.target.value) });
        }
    }

    const handleMinInputChange = (e) => {
        handleMinChange(e);
    }
    const handleMaxInputChange = (e) => {
        if (e.target.value < maxPrice) {
            setValue({ ...value, max: parseInt(e.target.value) });
        } else {
            setValue({ ...value, max: maxPrice });
        }
    }

    const handleMinBlur = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setValue({ ...value, min: 0 });
        }
    }
    const handleMaxBlur = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setValue({
                ...value, max: parseInt(value.min) + parseInt(priceGap)
            });
        }
    }

    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Shop by price" />
            <div className="price-input">
                <div className="field">
                    <span className='price-label'>Min</span>
                    <input type="number" className="input-min" value={value.min} onChange={handleMinInputChange} onBlur={handleMinBlur} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span className='price-label'>Max</span>
                    <input type="number" className="input-max" value={value.max} onChange={handleMaxInputChange} onBlur={handleMaxBlur} />
                </div>
            </div>
            <div className="slider">
                <div className="progress" style={{
                    left: `${(value.min / 10000) * 100}%`,
                    right: `${100 - (value.max / 10000) * 100}%`
                }}></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max={maxPrice} value={value.min} step="100" onChange={handleMinChange} />
                <input type="range" className="range-max" min="0" max={maxPrice} value={value.max} step="100" onChange={handleMaxChange} />
            </div>
        </div>
    )
}

export default FilterPrice