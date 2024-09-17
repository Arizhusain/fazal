import './trackingComponent.css'

const TrackingComponent = () => {
    return (
        <>
            <div className="tracking-wrapper">
                <div className="tracking">
                    <div id="progress" className="progress-0">
                        <div className="empty-bar"></div>
                        <div className="color-bar"></div>
                        <ul>
                            <li className="bullet-1">
                                <div className="el"><i className='bx bx-check'></i></div>
                                <div className="txt">Order Processed</div>
                            </li>
                            <li className="bullet-2">
                                <div className="el"><i className='bx bx-check'></i></div>
                                <div className="txt">Order Shipped</div>
                            </li>
                            <li className="bullet-3">
                                <div className="el"><i className='bx bx-check'></i></div>
                                <div className="txt">Order En Route</div>
                            </li>
                            <li className="bullet-4">
                                <div className="el"><i className='bx bx-check'></i></div>
                                <div className="txt">Order Arrived</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrackingComponent