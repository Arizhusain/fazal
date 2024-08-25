import React from 'react'
import s1 from '../../assets/images/service-1.png'
import s2 from '../../assets/images/service-2.png'
import s3 from '../../assets/images/service-3.png'
import s4 from '../../assets/images/service-4.png'

const Services = () => {
    return (
        <section class="section service">
            <div class="container">

                <ul class="service-list">

                    <li class="service-item">
                        <div class="service-card">

                            <div class="card-icon">
                                <img src={s1} width="53" height="28" loading="lazy" alt="Service icon"/>
                            </div>

                            <div>
                                <h3 class="h4 card-title">Free Shiping</h3>

                                <p class="card-text">
                                    All orders over <span>$150</span>
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-card">

                            <div class="card-icon">
                                <img src={s2} width="43" height="35" loading="lazy" alt="Service icon"/>
                            </div>

                            <div>
                                <h3 class="h4 card-title">Quick Payment</h3>

                                <p class="card-text">
                                    100% secure payment
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-card">

                            <div class="card-icon">
                                <img src={s3} width="40" height="40" loading="lazy" alt="Service icon"/>
                            </div>

                            <div>
                                <h3 class="h4 card-title">Free Returns</h3>

                                <p class="card-text">
                                    Money back in 30 days
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="service-item">
                        <div class="service-card">

                            <div class="card-icon">
                                <img src={s4} width="40" height="40" loading="lazy" alt="Service icon"/>
                            </div>

                            <div>
                                <h3 class="h4 card-title">24/7 Support</h3>

                                <p class="card-text">
                                    Get Quick Support
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Services