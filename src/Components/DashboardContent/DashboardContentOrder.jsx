import './dashboardContent.css';
import { Link } from 'react-router-dom';
import OrderSummaryCard from '../OrderSummaryCard/OrderSummaryCard';

const DashboardContentOrder = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='DashboardContent-profile-heading'>My Orders</h2>
                </div>
                <div className='DashboardContentOrder-container'>
                    <div className='DashboardContentOrder-header'>
                        <div className='DashboardContentOrder-header-item'>
                            <h2>Canceled</h2>
                            <p>Your order has been canceled</p>
                        </div>
                        <div className='DashboardContentOrder-header-item'>
                            <h2>Total</h2>
                            <p>₹3056.00</p>
                        </div>
                        <div className='DashboardContentOrder-header-item'>
                            <h2>Item(s)</h2>
                            <p>4</p>
                        </div>
                        <div className='DashboardContentOrder-header-item'>
                            <h2>Order #001457962</h2>
                            <p>Placed on 30 Aug, 2024</p>
                        </div>
                    </div>
                    <div className='DashboardContentOrder-body'>
                        <div className='DashboardContentOrder-body-order'>
                            <OrderSummaryCard id={1} />
                            <OrderSummaryCard id={2} />
                            <OrderSummaryCard id={3} />
                            <OrderSummaryCard id={4} />
                        </div>
                        <div className='DashboardContentOrder-body-view'>
                            <Link className='DashboardContentOrder-viewdetails-link' to={'/order-details/1'}>View details</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DashboardContentOrder