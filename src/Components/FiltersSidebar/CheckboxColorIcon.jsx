import PropTypes from 'prop-types';
import { useState } from 'react'

const CheckboxColorIcon = ({ item }) => {
    const [select, setSelect] = useState(false);
    return (
        <>
            <li>
                <a href="#1" className='color-item-wrapper'>
                    <div className='color-placeholder' style={{ backgroundColor: item }} onClick={() => setSelect(!select)}>
                        {select ? <ion-icon name="checkmark-outline"></ion-icon> : null}
                    </div>
                </a>
            </li>
        </>
    )
}

CheckboxColorIcon.propTypes = {
    item: PropTypes.string
};

export default CheckboxColorIcon