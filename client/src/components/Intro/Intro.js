import React from 'react'
import "./Intro.css"

const Intro = () => {
    return (
        <div className="full-section d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
                <img className="intro-image mx-4"  src="/images/about.jpg"/>
            <div className="text-container">
                <div class="top-side">
                    <h2 className="intro-title">Get to know us better</h2>
                    <p className="intro-text">We are ADS Shopping. Our store is more than just another average online retailer. We sell not only top quality products,
                        but aive our customers a positive online shoppina experience. Forget about struaalind to do evervthing at once taking
                        care or the family.</p>
                        <ul className="checked-list">
                            <li>
                                <input className="form-check-input bg-success" type="checkbox" checked /> There are basically six key areas to higher achievement
                            </li>
                            <li>
                                <input className="form-check-input bg-success"  type="checkbox" checked/> The first thing to remember about success is that it
                            </li>
                            <li>
                                <input className="form-check-input bg-success"  type="checkbox" checked/> Belief - believing in yourself and those around you
                            </li>
                        </ul>
                        <hr className="mb-5"/>
                </div>
                <div className="bottom-side d-flex justify-content around align-items-center">
                    <div className="left-side d-flex justify-content-center align-items-center">
                        <p className="mx-3">Logo</p>
                        <div>
                            <h5>Our store</h5>
                            <p className="intro-text">But naive our customers a positive online.</p>
                        </div>
                    </div>
                    <div className="right-side d-flex justify-content-center align-items-center">
                        <p className="mx-3">Logo</p>
                        <div>
                            <h5>Our mission</h5>
                            <p className="intro-text">Depending on the device you use to access</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </div>
        </div>

    )
}

export default Intro
