import React from 'react';
import './dashboardContent.css';
import DashboardContentSingleAddress from './DashboardContentSingleAddress';

const DashboardContentAddress = () => {
    return (
        <>
            <div>
                <div className='DashboardContentAddress-header'>
                    <h2 className='DashboardContent-profile-heading'>My Address</h2>
                    <button>
                        <ion-icon style={{ margin: 0 }} name="add-circle"></ion-icon>
                        <span>Add New Address</span>
                    </button>
                </div>
                <DashboardContentSingleAddress />
            </div >
        </>
    )
}

export default DashboardContentAddress