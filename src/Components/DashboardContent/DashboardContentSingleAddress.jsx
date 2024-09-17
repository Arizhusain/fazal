import PropTypes from 'prop-types';
import './dashboardContent.css';
import { useState } from 'react';
import AddressEditPopup from '../AddressPopup/AddressEditPopup';

const DashboardContentSingleAddress = ({ addressItem, onDelete, onUpdate }) => {
    const address = JSON.parse(addressItem);
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup)
    }

    const handleSubmit = (data) => {
        handlePopup();
        onUpdate(data);
    }
    return (
        <>
            <div className='DashboardContentAddress-address-main-container'>
                <div className='DashboardContentAddress-left'>
                    {address.isDefault ? <span>DEFAULT ADDRESS</span> : null}
                    <div className='DashboardContentAddress-top-head'>
                        <h4>{address.firstName} {address.lastName}</h4>
                        <span>{address.addressType}</span>
                    </div>
                    <address className='DashboardContentAddress-top-address'>
                        {address.address1} {address.address2} {address.city} {address.state} - {address.postCode}
                    </address>
                    <h4 className='DashboardContentAddress-top-mobile'>Mobile : +91 {address.contactNo}</h4>
                </div>
                <div className='DashboardContentAddress-right'>
                    <button onClick={handlePopup}>
                        <span>EDIT</span>
                    </button>
                    |
                    <button onClick={() => onDelete(address.id)}>
                        <span>DELETE</span>
                    </button>
                </div>
            </div >
            {showPopup ? <AddressEditPopup handleClose={handlePopup} onSubmit={handleSubmit} address={address}/> : null}
        </>
    )
}

DashboardContentSingleAddress.propTypes = {
    addressItem: PropTypes.object,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func
};

export default DashboardContentSingleAddress