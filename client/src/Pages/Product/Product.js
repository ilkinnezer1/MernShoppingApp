import React, { useState } from 'react'
import "./Product.css"
const Product = () => {
    const [increment, setIncrement] = useState(24)

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
        <div className="product-container d-flex container">
            <div className="img-container"  >
            <img src="/images/5.jpeg" alt="product"/>
            </div>
              
         
            <div className="product-description">
                <div className="header-text-container mb-5">
                    <h1 className="mb-2">Winter Collection</h1>
                        <p className="desc">Created by Stanford students and used by students at: Stanford, Harvard, Duke, Yale, MIT, Princetor, UGA, and hundreds of other colleges around the world
                            Featured in newspapers at Notre Dame, BYU, UGA, Lee University, University of Rochester, and more.
                            Featured in TechCrunch and Brit+Co!
                        </p>  
                </div>
                <h1 className="mb-4">$ 45</h1>
                <div className="product-choosing d-flex justify-content-between w-50">
                    <div className="color-desc d-flex align-items-center justify-content-center">
                            <h5 className="mt-1">Color</h5> 
                            <span className="rounded-black"></span>
                             <span className="rounded-green"></span>
                             <span className="rounded-red"></span>    
                        </div>
                    <div className="size w-25">
                    <label htmlFor="size">Size</label>
                         <select id="size" className="form-select">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                         </select>
                    </div>    
                </div>
                <div className="buttons d-flex w-50 justify-content-between mt-5">
                        <div>
                        <button className="single-button" onClick={handleDecrement} type="button">-</button>
                        <span className="size-value">{increment}</span>
                        <button className="single-button" onClick={handleIncrement} type="button">+</button>
                        </div>
                        <button className="btn btn-outline-dark">+ Add to Card</button>
                    </div>
            </div>
        </div>
    )
}

export default Product
