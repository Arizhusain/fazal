import React, { useState } from 'react'
import './productList.css'
import ProductCard from '../ProductCard/ProductCard'
import { filterCtaButtons } from '../../demo'
import ViewAllProductsButton from '../ViewAllProductsButton/ViewAllProductsButton'

const ProductList = () => {
    const [selectCTA, setSelectCTA] = useState(0);
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div>
                        <ul class="filter-list">
                            {
                                filterCtaButtons.map((item, index) => (
                                    <li>
                                        <button className={`filter-btn ${index === selectCTA ? 'active' : ''}`} onClick={() => setSelectCTA(index)}>{item}</button>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul class="product-list">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </ul>
                        <ViewAllProductsButton />
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductList