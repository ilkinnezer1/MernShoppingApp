import React from 'react'
import AboutIntro from '../../components/AboutIntro/AboutIntro'
import Category from '../../components/Category/Category'
import TopCat from '../../components/Category/TopCategory/TopCat'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import MyWrapper from '../../components/ProductGallery/ProductGalley'
import Slider from "../../components/Slider/Slider"

const Home = () => {
    return (
        <div>
            <Slider/>
            <Category/>
            <MyWrapper/>
            <TopCat/>
            <AboutIntro/>
            <Newsletter/>
        </div>
    )
}

export default Home
