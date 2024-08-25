import React from 'react';

const SingleTrend = ({ image, title, subTitle }) => {
    return (
        <>
            <div className='single-trend-wrapper' style={{ backgroundImage: `url(${image})` }}>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
            </div>
        </>
    )
}

export default SingleTrend;