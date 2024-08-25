import React from 'react';
import './exploreProducts.css';
import SingleCategoryProduct from './SingleCategoryProduct';
import { exploreProductsData } from '../../demo';

const ExploreProducts = () => {
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div className='explore-product-category'>
                        {
                            exploreProductsData.map((item) => (
                                <SingleCategoryProduct key={item.id} title={item.title} image={item.image} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default ExploreProducts