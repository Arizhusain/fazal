import React from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'
import Accordion from '../Accordion/Accordion'
import { categoryList } from '../../demo'

const FilterCategories = () => {
    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Categories" />
            <div className='sidebar-container'>
                {
                    categoryList.map((item, index) => (
                        <Accordion item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default FilterCategories