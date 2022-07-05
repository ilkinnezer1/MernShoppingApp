import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <hr className="line"/>
            <div className="top-footer">
                <div className="p-3 d-flex justify-content-between align-items-center">
                <p className="text-muted mx-5 w-50">ADS Shopping Mobile app is Available now. 
                Download it now on your tavorite device and indulge in a
                please bliela
                seamless sopping experenc.</p>
                <div className="d-flex">
                <img className="mx-3" src="/images/Footer/android.png" />
                <img className="mx-3" src="/images/Footer/1212.png" />
                </div>
               
            </div>
            </div>
            <div className="bottom-footer">
                <div className="p-3 bg-light d-flex justify-content-between align-items-center">
                <h6 className="text-muted mx-5 my-1">© Copyright 2021 ADS Shopping. All rights reserved</h6>
                <img className="mx-3" src="/images/Footer/12.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer
