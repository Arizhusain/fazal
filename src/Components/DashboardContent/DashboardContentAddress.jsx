import { useEffect, useState } from 'react';
import './dashboardContent.css';
import DashboardContentSingleAddress from './DashboardContentSingleAddress';
import AddressPopup from '../AddressPopup/AddressPopup'
import { UpdateExtraUserDetails } from '../../Server/User';
import { useApp } from '../../Context';
import { getUser } from '../../Server';

const DashboardContentAddress = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [userData, setUserData] = useState([]);
    const [address, setAddress] = useState([]);
    const user = useApp();

    const init = async () => {
        const userDetails = await getUser(user?.current?.$id);
        setUserData(userDetails);
        setAddress(userDetails.documents[0].address);
    }

    const handleSubmit = async (data) => {
        const addressArray = data?.isDefault ? [] : address;
        if (data?.isDefault) {
            address?.forEach((item) => {
                const value = JSON.parse(item);
                value.isDefault = false;
                addressArray.push(JSON.stringify(value));
            })
        }
        const addressdata = { address: [...addressArray, JSON.stringify(data)] };
        const submitAddress = await UpdateExtraUserDetails(userData.documents[0].$id, addressdata);
        setAddress(submitAddress.address);
    }

    const handleAddressDelete = async (id) => {
        const remainingAddress = address.filter((item) => JSON.parse(item).id !== id);
        const addressdata = { address: [...remainingAddress] };
        const submitAddress = await UpdateExtraUserDetails(userData.documents[0].$id, addressdata);
        setAddress(submitAddress.address);
    }

    const handleAddressUpdate = async (data) => {
        const remainingAddress = address.filter((item) => JSON.parse(item).id !== data.id);
        const addressArray = data?.isDefault ? [] : remainingAddress;
        console.log(data);
        if (data?.isDefault) {
            remainingAddress?.forEach((item) => {
                const value = JSON.parse(item);
                value.isDefault = false;
                addressArray.push(JSON.stringify(value));
            })
        }
        const addressdata = { address: [...addressArray, JSON.stringify(data)] };
        const submitAddress = await UpdateExtraUserDetails(userData.documents[0].$id, addressdata);
        setAddress(submitAddress.address);
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div>
                <div className='DashboardContentAddress-header'>
                    <h2 className='DashboardContent-profile-heading'>My Address</h2>
                    <button onClick={() => setShowPopup(true)}>
                        <ion-icon style={{ margin: 0 }} name="add-circle"></ion-icon>
                        <span>Add New Address</span>

                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    {
                        address.length ?
                            address.map((item) => (
                                <DashboardContentSingleAddress key={item.id} addressItem={item} onDelete={handleAddressDelete} onUpdate={handleAddressUpdate} />
                            ))
                            :
                            <h1>No address to show, add your first address now!</h1>
                    }
                </div>
            </div >
            {showPopup ? <AddressPopup handleClose={() => setShowPopup(false)} onSubmit={handleSubmit} /> : null}
        </>
    )
}

export default DashboardContentAddress