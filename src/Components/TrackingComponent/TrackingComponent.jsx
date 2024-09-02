import React, { useEffect } from 'react'
import './trackingComponent.css'

const TrackingComponent = () => {
    // var prev = document.getElementById('prev');
    // var next = document.getElementById('next');
    // var trak = document.getElementById('progress');
    // var step = document.getElementById('step');

    // useEffect(() => {
    //     next?.addEventListener('click', function () {
    //         var cls = trak.className.split('-').pop();
    //         cls > 6 ? cls = 0 : cls++;

    //         step.innerHTML = cls;
    //         trak.className = 'progress-' + cls;
    //     });

    //     prev?.addEventListener('click', function () {
    //         var cls = trak.className.split('-').pop();
    //         cls < 1 ? cls = 7 : cls--;

    //         step.innerHTML = cls;
    //         trak.className = 'progress-' + cls;
    //     });
    // }, [])
    return (
        <>
            <div class="tracking-wrapper">
                <div class="tracking">
                    <div id="progress" class="progress-0">
                        <div class="empty-bar"></div>
                        <div class="color-bar"></div>
                        <ul>
                            <li class="bullet-1">
                                <div class="el"><i class='bx bx-check'></i></div>
                                <div class="txt">Order Processed</div>
                            </li>
                            <li class="bullet-2">
                                <div class="el"><i class='bx bx-check'></i></div>
                                <div class="txt">Order Shipped</div>
                            </li>
                            <li class="bullet-3">
                                <div class="el"><i class='bx bx-check'></i></div>
                                <div class="txt">Order En Route</div>
                            </li>
                            <li class="bullet-4">
                                <div class="el"><i class='bx bx-check'></i></div>
                                <div class="txt">Order Arrived</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div class="controls">
                <div>
                    <button id="prev"><i class='bx bx-chevron-left'></i> Prev</button>
                    <button id="next">Next <i class='bx bx-chevron-right'></i></button>
                </div>
                <div>
                    <p>Step: <span id="step">0</span></p>
                </div>
            </div> */}
        </>
    )
}

export default TrackingComponent