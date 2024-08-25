import React from 'react'
import './productCard.css'

const ProductCard = () => {
  return (
    <>
      <li>
        <a href="#1" className='product-card-wrapper'>
          <div className='product-card'>
            <img className='product-image' src="https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_1280.jpg" alt="test" />
            <span className='new-button'>New</span>
            <div className='product-data'>
              <h2>Sky Blue and White</h2>
              <data class="card-price" value="190.85">$190.85</data>
            </div>
          </div>
        </a>
      </li>
    </>
  )
}

export default ProductCard