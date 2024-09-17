import PropTypes from 'prop-types';

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

SingleCategoryProduct.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};

export default SingleCategoryProduct