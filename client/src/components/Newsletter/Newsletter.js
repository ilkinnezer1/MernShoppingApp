import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center my-5">
            <div className="newsletter-container w-100 d-flex align-items-center justify-content-center flex-column">
            <label className="label-text mb-3" htmlFor="newsletter-input">
                Subscribe today and get 25% off on your first order!
                </label>
                <div className="text-center d-flex w-50">
                <input 
                className="form-control w-100 p-1 sub-input" 
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
                id="newsletter-input"/>
                <button type="submit" className="sub-button">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
