import React from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'
import CheckboxColorIcon from './CheckboxColorIcon'
import { colors } from '../../demo'

const FilterColor = () => {

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