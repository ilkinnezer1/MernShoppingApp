import React from 'react'
import {Link} from "react-router-dom"
import "./AboutIntro.css"

const AboutIntro = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center my-5">
            <div className="left-text-side d-flex flex-column mx-5">
                <p className="intro-header">Know more</p>
                <h1>
                    About ADS Shopping
                </h1>
                <p>We are ADS Shopping ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempol
                    incididunt ut abore et dolore magna aligua. Ut enim ad minim veni guis nostrud exercitation Ulamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link className="read-more-link" to="about">
                        <p  >Read more</p></Link>
            </div>
            <div className="right-image">
            <img src="/images/about.png"/>
            </div>
        </div>
    )
}

export default AboutIntro
