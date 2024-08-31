import React, { useState } from 'react';
import './addressCard.css';
import AddressPopup from '../AddressPopup/AddressPopup';

const AddressCard = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowPopup(true);
    }
    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowPopup(false);
    }
    return (
        <>
            <div className='addressCard-container'>
                <div className='addressCard-wrapper'>
                    <div className='addressCard-header'>
                        <span>1</span>
                        <h1>SELECT DELIVERY ADDRESS</h1>
                    </div>
                    <button onClick={handleOpen}>
                        <ion-icon style={{ margin: 0 }} name="add-circle"></ion-icon>
                        <span>Add New Address</span>
                    </button>
                </div>
                {showPopup ? <AddressPopup handleClose={handleClose} /> : null}
                <div className='addressCard-tail'>
                    <span>
                        No Address Found!
                    </span>
                </div>
            </div>
            <div className='addressCard-container'>
                <div className='addressCard-wrapper'>
                    <div className='addressCard-header'>
                        <span>2</span>
                        <h1>ORDER SUMMARY</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressCard