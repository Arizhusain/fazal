import React from 'react';
import './shoppingList.css';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';

const ShoppingList = () => {
    return (
        <>
            <section className='margin-top margin-bottom'>
                <div className='container'>
                    <div className='shopping-list-container'>
                        <div className='shopping-list-filter'>
                            <FiltersSidebar />
                        </div>
                        <div className='shopping-list-products'>Products</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingList