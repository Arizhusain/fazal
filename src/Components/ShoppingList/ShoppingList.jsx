import React from 'react';
import './shoppingList.css';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';
import ProductCard from '../ProductCard/ProductCard';

const ShoppingList = () => {
    return (
        <>
            <section className='margin-top margin-bottom'>
                <div className='container'>
                    <div className='shopping-list-container'>
                        <div className='shopping-list-filter'>
                            <FiltersSidebar />
                        </div>
                        <div className='shopping-list-products'>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingList