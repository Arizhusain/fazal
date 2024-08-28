import React from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'
import CheckboxColorIcon from './CheckboxColorIcon'

const FilterColor = () => {
    const colors = [
        '#E52B50', '#FFBF00', '#9966CC', '#8DB600', '#BE0032', '#FBCEB1', '#7FFFD4', '#007FFF'
    ]
    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Shop by color" />
            <div>
                <ul className='color-container'>
                    {
                        colors.map((item) => (
                            <CheckboxColorIcon item={item} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterColor