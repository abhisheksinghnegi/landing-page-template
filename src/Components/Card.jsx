import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Card = ({
    imgsrc,
    title,
    body,
    link,
    disable,
    authenticate
}) => {
    const history = useHistory();
    const clicked = () => {
        if (authenticate) {
            if (disable) {
                let path = link;
                history.push(path);
            } else {
                let path = '/sign_up';
                history.push(path);
            }
        } else {
            let path = link;
            history.push(path);
        }
    }
    return (
        <>
            <div className="col-md-4 col-10 mx-auto" onClick={clicked}>
                <div className="card">
                    <img src={imgsrc} style={{ height: "300px" }} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                        {/* <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
