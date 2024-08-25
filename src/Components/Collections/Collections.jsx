import React from 'react'

const Collections = () => {
    return (
        <section class="section collection">
            <div class="container">

                <ul class="collection-list has-scrollbar">

                    <li>
                        <div class="collection-card" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg)`}}>
                            <h3 class="h4 card-title">Shirts</h3>

                            <a href="#1" class="btn btn-secondary">
                                <span>Explore All</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="collection-card" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2024/04/29/04/21/neon-8726714_1280.jpg)`}}>
                            <h3 class="h4 card-title">T-Shirts</h3>

                            <a href="#1" class="btn btn-secondary">
                                <span>Explore All</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>

                    <li>
                        <div class="collection-card" style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg)`}}>
                            <h3 class="h4 card-title">Vests</h3>

                            <a href="#1" class="btn btn-secondary">
                                <span>Explore All</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default Collections