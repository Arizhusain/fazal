import React from 'react'
import './filtersSidebar.css'
import FilterCategories from './FilterCategories'
import FilterPrice from './FilterPrice'
import FilterSize from './FilterSize'
import FilterColor from './FilterColor'

const FiltersSidebar = () => {
    return (
        <>
            <div className='margin-bottom'>
                <FilterCategories />
                <FilterPrice />
                <FilterColor />
                <FilterSize />
            </div>
        </>
    )
}

export default FiltersSidebar