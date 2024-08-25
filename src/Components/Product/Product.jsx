import React from 'react'

const Product = () => {
    const productList = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section class="section product">
            <div class="container">

                <h2 class="h2 section-title">Bestsellers Products</h2>

                <ul class="filter-list">

                    <li>
                        <button class="filter-btn  active">All</button>
                    </li>

                    <li>
                        <button class="filter-btn">ZARA</button>
                    </li>

                    <li>
                        <button class="filter-btn">PUMA</button>
                    </li>

                    <li>
                        <button class="filter-btn">Crododile</button>
                    </li>

                    <li>
                        <button class="filter-btn">Pepe</button>
                    </li>

                    <li>
                        <button class="filter-btn">US polo.</button>
                    </li>

                </ul>

                <ul class="product-list">
                    {
                        productList.map((item) => (
                            <li class="product-item">
                                <div class="product-card" tabindex="0">

                                    <figure class="card-banner">
                                        <img src='https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_1280.jpg' width="312" height="350" loading="lazy"
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
                                            <a href="#1">Sky Blue and White Structured Striped Half Sleeves T Shirt</a>
                                        </h3>
                                        <data class="card-price" value="180.85">$180.85</data>

                                    </div>

                                </div>
                            </li>
                        ))
                    }

                </ul>

            </div>
        </section>
    )
}

export default Product