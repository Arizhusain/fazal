import React from 'react';

const SingleTrend = ({ image, title, subTitle }) => {
    return (
        <>
            <a href="#1" style={{ width: '100%' }}>
                <div className='single-trend-wrapper' style={{ backgroundImage: `url(${image})` }}>
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                </div>
            </a>
        </>
    )
}

export default SingleTrend;