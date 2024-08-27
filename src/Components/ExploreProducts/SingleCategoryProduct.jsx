import React from 'react'

const SingleCategoryProduct = ({ image, title }) => {
    return (
        <>
            <a href="#1">
                <div className='single-category-wrapper'>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                </div>
            </a>
        </>
    )
}

export default SingleCategoryProduct