import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  //const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  //Fatching data from API
  useEffect(() => {
     dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  
  //for add Data into Cart
  const addHandler = (product) => {
    dispatch(add(product)); // useDispatch used to dispatch an action while useSelector hook is used to get the state from the redux store.
  };

  if(status === STATUSES.LOADING) {
    return <h3 style={{marginLeft: "2rem"}}>Loading...</h3>
  }

  return (
    <div className="container">
      <div className="row">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <div className="img-block">
                  <p className="category-text">{product.category}</p>
                  <img
                    src={product.image}
                    alt="products item"
                    className="w-100"
                  />
                </div>
                <div className="content-body">
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                  <button className="btn" onClick={() => addHandler(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
