import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';
import { useAuth0 } from '@auth0/auth0-react';
const Services = () => {
    const {isAuthenticated} = useAuth0()
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val, index) => {
                                return <Card 
                                    key={index}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    body={val.body}
                                    link={val.link}
                                    disable={isAuthenticated}
                                    authenticate = {val.authenticate}
                                    // key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;
