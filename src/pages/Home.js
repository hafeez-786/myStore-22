import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='heading-text'><h2>Welcome Redux ToolKit Store</h2></div>
      <div>
        <h3 className='products-heading'>Our Products</h3> 
        <Products />
      </div>
    </div>
  )
}

export default Home