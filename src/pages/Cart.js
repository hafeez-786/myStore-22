import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const removeHandler = (productId) => {
     dispatch(remove(productId))
  }

  return (
    <>
      <h3 className="heading-text">Product Details</h3>
      <div className="card-wrapper">
        {products.map((product) => {
          return (
            <div className="cart-details" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt="product image" />
              </div>
              <div className="product-details">
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <p>{product.description}</p>
                <button className="btn"
                onClick={() => removeHandler(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
