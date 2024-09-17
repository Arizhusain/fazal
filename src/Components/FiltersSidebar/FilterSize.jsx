import CategoryHeading from '../CategoryHeading/CategoryHeading'
import { sizes } from '../../demo'

const FilterSize = () => {
    return (
        <div className='margin-bottom'>
            <CategoryHeading categoryHeading="Shop by size" />
            <div>
                {
                    sizes.map((item, index) => (
                        <div key={index} className='checkbox-wrapper'>
                            <div>
                                <label className="checkbox-container">
                                    <input type="checkbox" />
                                    <div className="checkmark"></div>
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