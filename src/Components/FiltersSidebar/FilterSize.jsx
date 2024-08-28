import React from 'react'
import CategoryHeading from '../CategoryHeading/CategoryHeading'

const FilterSize = () => {
    const size = ['xxs',
        'xs',
        'xs-s',
        's',
        'm',
        'm-l',
        'l',
        'xl']
    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Shop by size" />
            <div>
                {
                    size.map((item) => (
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