import React from 'react'
import card1 from '../../assets/images/product-1.jpg'
import card2 from '../../assets/images/product-2.jpg'
import card3 from '../../assets/images/product-3.jpg'
import card4 from '../../assets/images/product-4.jpg'
import ban1 from '../../assets/images/special-banner.jpg'

const Special = () => {
    const productList = [card1, card2, card3, card4];
    return (
        <section class="section special">
            <div class="container">

                <div class="special-banner" style={{ backgroundImage: `url(https://grocered.in/blog/wp-content/uploads/2023/06/zara.webp)` }}>
                    <h2 class="h3 banner-title">New Trend Edition</h2>

                    <a href="#" class="btn btn-link">
                        <span>Explore All</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                </div>

                <div class="special-product">

                    <h2 class="h2 section-title">
                        <span class="text">ZARA Special</span>

                        <span class="line"></span>
                    </h2>

                    <ul class="has-scrollbar">
                        {
                            productList.map((item) => (
                                <li class="product-item">
                                    <div class="product-card" tabindex="0">

                                        <figure class="card-banner">
                                            <img src='https://cdn.pixabay.com/photo/2024/01/20/01/50/ai-generated-8520198_960_720.jpg' width="312" height="350" loading="lazy"
                                                alt="Running Sneaker Shoes" class="image-contain" />

                                            <div class="card-badge">New</div>

                                            <ul class="card-action-list">

                                                <li class="card-action-item">
                                                    <button class="card-action-btn" aria-labelledby="card-label-1">
                                                        <ion-icon name="cart-outline"></ion-icon>
                                                    </button>

                                                    <div class="card-action-tooltip" id="card-label-1">Add to Cart</div>
                                                </li>

                                                <li class="card-action-item">
                                                    <button class="card-action-btn" aria-labelledby="card-label-2">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>

                                                    <div class="card-action-tooltip" id="card-label-2">Add to Whishlist</div>
                                                </li>

                                                <li class="card-action-item">
                                                    <button class="card-action-btn" aria-labelledby="card-label-3">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>

                                                    <div class="card-action-tooltip" id="card-label-3">Quick View</div>
                                                </li>

                                                <li class="card-action-item">
                                                    <button class="card-action-btn" aria-labelledby="card-label-4">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>

                                                    <div class="card-action-tooltip" id="card-label-4">Compare</div>
                                                </li>

                                            </ul>
                                        </figure>

                                        <div class="card-content">

                                            <h3 class="h3 card-title">
                                                <a href="#">ZARA Tshirts</a>
                                            </h3>

                                            <data class="card-price" value="180.85">$180.85</data>

                                        </div>

                                    </div>
                                </li>
                            ))
                        }



                    </ul>

                </div>

            </div>
        </section>
    )
}

export default Special