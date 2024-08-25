import React from 'react'
import cta1 from '../../assets/images/cta-1.jpg'
import cta2 from '../../assets/images/cta-2.jpg'
const Offers = () => {
    return (
        <section class="section cta">
            <div class="container">

                <ul class="cta-list">

                    <li>
                        <div class="cta-card" style={{ backgroundImage: `url(https://i.ytimg.com/vi/E843eRRi8BE/maxresdefault.jpg)` }}>
                            <p class="card-subtitle">Pepe</p>

                            <h3 class="h2 card-title">The Summer Sale Off 50%</h3>

                            <a href="#" class="btn btn-link">
                                <span>Shop Now</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="cta-card" style={{ backgroundImage: `url(https://www.fashiongonerogue.com/wp-content/uploads/2024/04/Pepe-Jeans-Spring-2024-Campaign02.jpg)` }}>
                            <p class="card-subtitle">US polo</p>

                            <h3 class="h2 card-title">Give Yourself Best Look</h3>

                            <a href="#" class="btn btn-link">
                                <span>Shop Now</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Offers