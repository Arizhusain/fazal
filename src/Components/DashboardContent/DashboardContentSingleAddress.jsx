import React from 'react';
import './dashboardContent.css';

const DashboardContentSingleAddress = () => {
    return (
        <>
            <div className='DashboardContentAddress-address-main-container'>
                <div className='DashboardContentAddress-left'>
                    <span>DEFAULT ADDRESS</span>
                    <div className='DashboardContentAddress-top-head'>
                        <h4>Arifhusain Soudagar</h4>
                        <span>HOME</span>
                    </div>
                    <address className='DashboardContentAddress-top-address'>
                        501 al barakha, kollikeri dharwad, near charantimath garden, Dharwad Karnataka - 580001
                    </address>
                    <h4 className='DashboardContentAddress-top-mobile'>Mobile : +91 7358236715</h4>
                </div>
                <div className='DashboardContentAddress-right'>
                    <button>
                        <span>EDIT</span>
                    </button>
                    |
                    <button>
                        <span>DELETE</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DashboardContentSingleAddress