import PropTypes from 'prop-types';
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


CategoryHeading.propTypes = {
    categoryHeading: PropTypes.string
};

export default CategoryHeading