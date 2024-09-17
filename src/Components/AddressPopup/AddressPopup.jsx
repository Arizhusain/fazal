import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './addressPopup.css';
import { AppContext } from '../../Context';

const AddressPopup = ({ handleClose }) => {
    const { data, setData } = useContext(AppContext);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
        return () => {
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const addressObject = {};
        for (let entry of formData.entries()) {
            addressObject[entry[0]] = entry[1]
        }
        setData({ addressData: [...data.addressData, addressObject] });
        handleClose(e);
    }
    return (
        <>
            <div className='addressPopup-container'>
                <div>
                    <section className='addressPopup-wrapper'>
                        <div className='addressPopup-form-header-container'>
                            <h1 className='addressPopup-form-header'>Add New Address</h1>
                            <button onClick={handleClose}><ion-icon name="close"></ion-icon></button>
                        </div>
                        <form action="POST" className='addressPopup-form' onSubmit={handleSubmit}>
                            <label className='mandatoryMark' htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" placeholder='Enter First Name' required />
                            <label className='mandatoryMark' htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" placeholder='Enter Last Name' required />
                            <label className='mandatoryMark' htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter Email' required />
                            <label className='mandatoryMark' htmlFor="contactNo">Mobile Number</label>
                            <input type="number" name="contactNo" id="contactNo" placeholder='Enter Mobile Number' required />
                            <label className='mandatoryMark' htmlFor="address1">ADDRESS 1 (Flat, House no., Building, Company, Apartment)</label>
                            <input type="text" name="address1" id="address1" placeholder='Enter Address 1' required />
                            <label className='mandatoryMark' htmlFor="address2">ADDRESS 2 (Area, Colony, Street, Sector, Village)</label>
                            <input type="text" name="address2" id="address2" placeholder='Enter Address 2' required />
                            <label className='mandatoryMark' htmlFor="landMark">Landmark</label>
                            <input type="text" name="landMark" id="landMark" placeholder='Enter Landmark' required />
                            <label className='mandatoryMark' htmlFor="postCode">Post code</label>
                            <input type="number" name="postCode" id="postCode" placeholder='Enter postcode' required />
                            <label className='mandatoryMark' htmlFor="city">City</label>
                            <input type="text" name="city" id="city" placeholder='Enter City' required />
                            <label className='mandatoryMark' htmlFor="state">State</label>
                            <input type="text" name="state" id="state" placeholder='Enter State' required />
                            <label htmlFor="instructions">Any instructions? (Optional)</label>
                            <textarea name="instructions" id="instructions"></textarea>
                            <label className='mandatoryMark' htmlFor="addressType">Address Type</label>
                            <div className='addressPopup-action-radio-btn addressPopup-margin-bottom'>
                                <label>
                                    <input type="radio" name="addressType" value="home" required />
                                    <span className="filter-input">Home</span>
                                </label>
                                <label>
                                    <input type="radio" name="addressType" value="office" required />
                                    <span className="filter-input">Office/Commercial</span>
                                </label>
                            </div>
                            <span className='addressPopup-margin-bottom'>
                                <input type="checkbox" id="isDefault" name="isDefault" value="true" />
                                <label htmlFor="isDefault" className="filter-input">Make this my default address</label>
                            </span>
                            <div className='addressPopup-action-btn'>
                                <button className='addressPopup-submit-btn'>Submit</button>
                                <button className='addressPopup-cancel-btn' onClick={handleClose}>Cancel</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

AddressPopup.propTypes = {
    handleClose: PropTypes.func
};

export default AddressPopup