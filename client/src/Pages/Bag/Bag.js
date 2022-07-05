import React, { useState } from 'react'
import { bag } from '../../Utils/bag'
import "./Bag.css"

const Bag = () => {
    const [bagData, setBagData] = useState(bag)
    const [increment, setIncrement] = useState(20)

    const handleIncrement = () => {
        while(increment < 38){
           return setIncrement(prev => prev + 1)  
        }
    }
    const handleDecrement = () => {
        while(increment >= 21)
            return setIncrement(prev => prev - 1 )  
    }
    return (
        <div className="bg-light py-5 d-flex align-items-center justify-content-center flex-column">
            <h1 className="bag-header">YOUR BAG</h1>
            <div className="header-buttons d-flex justify-content-between w-100 container mt-3 mb-4">
                <button className="btn btn-outline-dark">Go on shopping</button>
                <div className="d-flex align-items-center justify-content-center mx-1">
                    <p className="mx-2 text-decoration-underline">Shopping Bag ({bagData.length})</p>
                    <p className="mx-4 text-decoration-underline">Your Whishlist (0)</p>
                </div>
                <button className="btn btn-dark">Checkout</button>
            </div>
            <div className="products-order-container d-flex justify-content-center align-items-start">
            <div className="bag-container">
            <div>
        {bagData.map(b => ( 
      <div className="right-side-container d-flex justify-content-around align-items-center mx-4 mb-2 p-2" key={b.id}>
      <div className="d-flex align-items-center">
      <img className="product-image mx-1" src={b.img}/>
      <div className="product-description">
      <h5 className="mb-3 mx-4">Type: <span className="light-text">{b.product}</span></h5>
      <h5 className="mb-3 mx-4">ID: <span className="light-text">{b.productId}</span></h5>
      <h5 className="mx-4">Size: <span className="light-text">{b.size}</span></h5>
  </div> 
  </div>
  <div className="product-price" key={b.id}>
          <div className="d-flex mb-4">
          <button className="single-button bg-light" onClick={handleDecrement} type="button">-</button>
          <span className="size-value">{increment}</span>
          <button className="single-button bg-light" onClick={handleIncrement} type="button">+</button>
          </div>
          <h1>$ {b.price}</h1>
  </div>
  <hr className="bg-dark"/>       
  </div>
        ))
        } 
</div>
</div>
    <div className="left-side-container p-3">
        <div>
            <div className="order-bag">
                    <h2 className="mb-4">ORDER SUMMARY</h2>
                    <div className="estimation">
                        <div className="estimation-price d-flex align-items-center justify-content-between mx-2 mb-3">
                            <h3>Subtotal</h3>
                            <h3 className="light-font">$ 80</h3>
                        </div>
                        <div className="estimation-price d-flex align-items-center justify-content-between mx-2 mb-3">
                            <h3>Estimated Shipping</h3>
                            <h3 className="light-font">$ 80</h3>
                        </div>
                        <div className="estimation-price d-flex align-items-center justify-content-between mx-2 mb-3">
                            <h3>Shipping Discount</h3>
                            <h3 className="light-font">$ 80</h3>
                        </div>
                        <div className="estimation-total d-flex align-items-center justify-content-between mx-2 mb-3">
                            <h3>Total</h3>
                            <h3 className="light-font">$ 80</h3>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark w-75 mx-5">Checkout</button>
                </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Bag
