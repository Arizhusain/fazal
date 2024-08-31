import React, { useContext, useEffect, useState } from 'react';
import './addressCard.css';
import AddressPopup from '../AddressPopup/AddressPopup';
import { AppContext } from '../../Context';
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';
import PaymentComponent from '../PaymentComponent/PaymentComponent';

const AddressCard = ({ enableCheckoutOption, handlePaymentOptionSelect }) => {
    const { data } = useContext(AppContext);
    const [showPopup, setShowPopup] = useState(false);
    const [showSummaryAndPayment, setShowSummaryAndPayment] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data])

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

    const handleAddressChange = () => {
        setShowSummaryAndPayment(true);
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
                    {
                        data?.addressData?.length ?
                            <span>
                                {
                                    data?.addressData?.map((item) => (
                                        <label className='addressCard-adrressSelection'>
                                            <input type="radio" name="addressSelection" id="addressSelection" onChange={handleAddressChange} />
                                            <div>
                                                <h1>{item.firstName} {item.lastName}</h1>
                                                <p>{item.address1} {item.address2} {item.city} {item.state}</p>
                                                <span>{item.contactNo}</span> <span>{item.email}</span>
                                            </div>
                                        </label>
                                    ))
                                }
                            </span> :
                            <span>
                                No Address Found!
                            </span>
                    }
                </div>
            </div>
            {showSummaryAndPayment ? <><div className='addressCard-container'>
                <div className='addressCard-wrapper'>
                    <div className='addressCard-header'>
                        <span>2</span>
                        <h1>ORDER SUMMARY</h1>
                    </div>
                </div>
                <div className='addressCard-tail'>
                    <OrderSummaryCard />
                    <OrderSummaryCard />
                    <OrderSummaryCard />
                </div>
            </div>
                <div className='addressCard-container'>
                    <div className='addressCard-wrapper'>
                        <div className='addressCard-header'>
                            <span>3</span>
                            <h1>Payment</h1>
                        </div>
                    </div>
                    <div className='addressCard-tail'>
                        <PaymentComponent enableCheckoutOption={enableCheckoutOption} handlePaymentOptionSelect={handlePaymentOptionSelect} />
                    </div>
                </div></> : null}
        </>
    )
}

export default AddressCard