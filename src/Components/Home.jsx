import React from 'react';
import home from "../images/home.svg";
import Common from './Common';
import Profile from './Profile';
import Button from './Button'
import Counter from './Counter';
import Modal from './Modal';
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        localStorage.setItem("isAuthenticated", "true")
        console.log(user)
        console.log("user id:", user.sub);
    }else{
        localStorage.setItem("isAuthenticated", "false")
    }
    return (
        <>
            <Common
                name='Fulfill your medicine need with'
                imgsrc={home}
                isCompName={true}
                compName="Medical Shop"
                visit='/services'
                btnname="Get Started"
                message="We are there for you. Through whatever, whenever."
                userName={isAuthenticated ? user.given_name : "user"}
            />

        </>
    )
}

export default Home;