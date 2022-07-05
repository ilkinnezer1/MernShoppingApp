import React from 'react'
import "./MainFooter.css"

const MainFooter = () => {
    return (
        <>
        <hr className="line"/>
        <div className="main-footer-container d-flex justify-content-between align-items-start container my-5 ">
            <div className="logo-section w-25">
                <div className="d-flex align-items-center mb-4">
                <img className="logo" src="/images/Footer/aa.png"/>
                <h3 className="my-1 mx-2">ADS Shopping</h3>
                </div>
                <p className="text-muted">
                ADS Shopping is an enchanting and easv to use e
                Commerce WP theme that allows you to sell
                your products In dynamic way.
                The theme is packed with everything you need to create a new wensife
                </p>
            </div>
            <div className="useful-links">
                <ul className="list-link">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Register</li>
                    <li>Sign in</li>
                    <li>Bag</li>
                </ul>
            </div>
            <div className="information">
            <ul className="list-link">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Register</li>
                    <li>Sign in</li>
                    <li>Bag</li>
                    <li>Register</li>
                    <li>Sign in</li>
                    <li>Bag</li>
                </ul>
            </div>
            <div className="contact-info">
            <ul className="list-link">
                    <li className="mb-3">1635 Franklin Street</li>
                    <a className="email" href="mailto: support@adsShopping.com">Email us</a>
                    <li className="mt-3">1231432424</li>
                </ul>
              <label htmlFor="newsletter" className="label">Newsletter</label>
                <div className="d-flex">
                    <input id="newsletter" type="text" className=" form-control" placeholder="Enter your email" autoComplete="off"/>
                    <button className="btn btn-success mx-1">+</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default MainFooter
