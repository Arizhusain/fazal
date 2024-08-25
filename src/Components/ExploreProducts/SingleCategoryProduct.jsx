import React from 'react'

const SingleCategoryProduct = ({ image, title }) => {
    return (
        <>
            <div className='single-category-wrapper'>
                <img src={image} alt={title} />
                <h3>{title}</h3>
            </div>
        </>
    )
}

export default SingleCategoryProduct