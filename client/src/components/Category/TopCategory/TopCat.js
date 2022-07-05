import React from 'react'
import {Link} from "react-router-dom"
import "./TopCat.css"

const TopCat = () => {
    return (
        <div className="bottom-category d-flex justify-content-center container align-items-center">
            <div className="left-gallery mx-5">
                <div className="top-left-gallery d-flex flex-column justify-content-center align-items-center">
                    <Link to="/product">
                    <button className="btn btn-dark mb-3">New</button>
                    </Link>
                    <h2 className="top-header">
                    Checked Blouse <br/>With Ruffle Trims
                    </h2>
                </div>
                <div className="bottom-left-gallery d-flex flex-column align-items-center justify-content-center">
                <Link to="/product">
                    <button className="btn btn-dark mb-3">Sale</button>
                    </Link>
                    <h2 className="bottom-header">
                    Trousers With <br/> Contrasting <br/> Topstitching
                    </h2>
                </div>
            </div>
            <div className="right-gallery">
                <div className="right-season">
                    <h1 className="right-banner-header mx-3 my-5">
                        TOPS
                    </h1>
                    <h1 className="mx-3 mb-5">Season Festival</h1>
                    <button className="btn btn-success mx-3">Buy now!</button>
                </div>
            </div>
        </div>
    )
}

export default TopCat
