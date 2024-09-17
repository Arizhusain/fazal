import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './addressPopup.css';

const AddressEditPopup = ({ handleClose, onSubmit, address }) => {
    const [data, setData] = useState(address);
    const [checkedValue, setCheckedValue] = useState(address.isDefault || false);
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
        onSubmit({ ...data, isDefault: checkedValue })
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleCheckbox = () => {
        setCheckedValue(!checkedValue);
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
                            <input value={data.firstName} type="text" name="firstName" id="firstName" placeholder='Enter First Name' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="lastName">Last Name</label>
                            <input value={data.lastName} type="text" name="lastName" id="lastName" placeholder='Enter Last Name' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="email">Email</label>
                            <input value={data.email} type="email" name="email" id="email" placeholder='Enter Email' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="contactNo">Mobile Number</label>
                            <input value={data.contactNo} type="number" name="contactNo" id="contactNo" placeholder='Enter Mobile Number' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="address1">ADDRESS 1 (Flat, House no., Building, Company, Apartment)</label>
                            <input value={data.address1} type="text" name="address1" id="address1" placeholder='Enter Address 1' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="address2">ADDRESS 2 (Area, Colony, Street, Sector, Village)</label>
                            <input value={data.address2} type="text" name="address2" id="address2" placeholder='Enter Address 2' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="landMark">Landmark</label>
                            <input value={data.landMark} type="text" name="landMark" id="landMark" placeholder='Enter Landmark' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="postCode">Post code</label>
                            <input value={data.postCode} type="number" name="postCode" id="postCode" placeholder='Enter postcode' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="city">City</label>
                            <input value={data.city} type="text" name="city" id="city" placeholder='Enter City' required onChange={handleChange} />
                            <label className='mandatoryMark' htmlFor="state">State</label>
                            <input value={data.state} type="text" name="state" id="state" placeholder='Enter State' required onChange={handleChange} />
                            <label htmlFor="instructions">Any instructions? (Optional)</label>
                            <textarea value={data.instructions} name="instructions" id="instructions" onChange={handleChange}></textarea>
                            <label className='mandatoryMark' htmlFor="addressType">Address Type</label>
                            <div className='addressPopup-action-radio-btn addressPopup-margin-bottom'>
                                <label>
                                    <input checked={data.addressType === 'home'} type="radio" name="addressType" value="home" required onChange={handleChange} />
                                    <span className="filter-input">Home</span>
                                </label>
                                <label>
                                    <input checked={data.addressType === 'office'} type="radio" name="addressType" value="office" required onChange={handleChange} />
                                    <span className="filter-input">Office/Commercial</span>
                                </label>
                            </div>
                            <span className='addressPopup-margin-bottom'>
                                <input checked={checkedValue} type="checkbox" id="isDefault" name="isDefault" value="true" onClick={handleCheckbox} />
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

AddressEditPopup.propTypes = {
    handleClose: PropTypes.func,
    address: PropTypes.object,
    onSubmit: PropTypes.func
};

export default AddressEditPopup