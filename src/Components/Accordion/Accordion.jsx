import { useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.css';

const Accordion = ({ item }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='siderbar-body'>
                <div>
                    <button className='siderbar-body-container' onClick={() => setShow(!show)}>
                        <h3 className='category-heading'>{item.categoryName}</h3>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </button>
                </div>
                <div className='siderbar-body-wrapper' style={{ display: (show) ? 'block' : 'none' }}>
                    <ul className='siderbar-list'>
                        {
                            item.categoryItems.map((catItem, index) => (
                                <li key={index} className='siderbar-list-item'><a href="#1">{catItem}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

Accordion.propTypes = {
    item: PropTypes.any
};

export default Accordion