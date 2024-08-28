import React from 'react'
import './categoryHeading.css'

const CategoryHeading = ({ categoryHeading }) => {
    return (
        <>
            <div style={{ paddingTop: '1rem' }}>
                <div>
                    <h2 className='siderbar-category-heading'>{categoryHeading}</h2>
                </div>
            </div>
        </>
    )
}

export default CategoryHeading