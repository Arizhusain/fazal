import React from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'
import { sizes } from '../../demo'

const FilterSize = () => {
    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Shop by size" />
            <div>
                {
                    sizes.map((item) => (
                        <div className='checkbox-wrapper'>
                            <div>
                                <label class="checkbox-container">
                                    <input type="checkbox" />
                                    <div class="checkmark"></div>
                                </label>

                            </div>
                            <span className='checkbox-label-text'>{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterSize