import PropTypes from 'prop-types';

const SizeBox = ({ item, size, onSizeSelect }) => {
    return (
        <>
            <li>
                <button className='size-placeholder-button' style={{ backgroundColor: (size === item) ? '#bb4d4d' : 'white' }} onClick={() => onSizeSelect(item)}>
                    <div className='size-placeholder' style={{ color: (size === item) ? 'white' : 'black' }}>
                        {item}
                    </div>
                </button>
            </li>
        </>
    )
}

SizeBox.propTypes = {
    item: PropTypes.any,
    size: PropTypes.string,
    onSizeSelect: PropTypes.func
};

export default SizeBox