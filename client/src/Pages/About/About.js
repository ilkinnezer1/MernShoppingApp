import React from 'react'
import Footer from '../../components/AboutFooter/Footer'
import Facts from '../../components/Facts/Facts'
import Intro from '../../components/Intro/Intro'
import Staff from '../../components/Staff/Staff'
import "./About.css"

const About = () => {
    return (
        <div>
            <Intro/>
            <Facts/>
            <Staff/>
        </div>
    )
}

export default About
