import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/sign_up' 
                btnname="Sign Up" 
                message="We are a startup which provide quality hyservices which are focused on fulfilling all your medical needs"
                userName="User"
            />
        </>
    )
}

export default About
