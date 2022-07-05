import React from 'react'
import {Link} from "react-router-dom"
import "./Style.css"
import TopCat from './TopCategory/TopCat'

const Category = () => {
    return (
        <div className="category-section d-flex align-items-center mb-5"> 
            <div className="left-text-side mx-5 ">
                <h1 className="banner-header">
                    End Of Season
                </h1>
                <p className="banner-text">
                Avail massive discounts and get exciting offers
                with our shopping across all new arrival
                categories          
                </p>
                <div className="d-flex justify-content-end align-items-end">
                <hr className="bg-dark w-25"/>
                </div>
        
                <div className="banner-button" >
                 <Link to="/product">
                    <button className="btn btn-dark"> Shop Now</button>
                 </Link>
                 </div>
            </div>
            <div className="right-photo-section d-flex justify-content-center align-items-center">
                <div className="first-banner-img d-flex flex-column justify-content-end align-items-start">
                    <h2 className="mx-5 my-4 text-white">
                       <hr className="w-50"/> Women's
                    </h2>
                </div>
                <div className='second-banner-img d-flex flex-column justify-content-end align-items-start'>
                    <h2 className="mx-5">
                    <hr className="w-50" />Kid's
                   </h2>
                </div>
                <div className="third-banner-img d-flex flex-column justify-content-end align-items-start">
                    <h2 className="mx-5">
                    <hr className="w-100"/>  Men
                    </h2>
                </div>  
            </div>
        </div>
    )
}

export default Category
