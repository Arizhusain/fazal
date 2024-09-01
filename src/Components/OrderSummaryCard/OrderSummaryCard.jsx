import React from 'react';
import './orderSummaryCard.css'
import { Link } from 'react-router-dom';

const OrderSummaryCard = ({ id }) => {
  return (
    <>
      <Link to={`/products/${id}`}>
        <div className='OrderSummaryCard-container'>
          <img src="https://cdn-media.powerlook.in/catalog/product/d/p/dp11154010.jpg?aio=w-256" alt="shirt" />
          <div>
            <p>Multi Colour Crochet Regular Fit Half Sleeves T-Shirt</p>
            <span>PRICE: ₹899</span>
            <span>QTY: 1</span>
            <span>COLOR: RED</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default OrderSummaryCard