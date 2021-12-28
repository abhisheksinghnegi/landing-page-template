import React, { useState, useRef } from "react";
import swal from 'sweetalert';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// Using refs here
const Contact = () => {

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const loggedIn = localStorage.getItem("loggedIn")

  const [data, setData] = useState({
    fullname: "",
    email: "",
    msg: ""
  })

  let output = <h2>You are not logged in yet.</h2>
  if (isAuthenticated) {
    output = <h2>Hello, {user.name}</h2>
  }
  const nameWithRef = useRef();
  const msgInputHandler = (event) => {
    setData((prevState) => {
      return ({
        ...prevState,
        msg: event.target.value
      })
    })
  }
  const fullNameInputHandler = (event) => {
    setData((prevState) => {
      return ({
        ...prevState,
        fullname: event.target.value
      })
    })
  }
  const emailInputHandler = (event) => {
    setData((prevState) => {
      return ({
        ...prevState,
        email: event.target.value
      })
    })
  }
  console.log(user)
  const formSubmitHandle = (event) => {
    event.preventDefault();
    // message can be saved to db or email can be sent from here!
    //using ref here
    console.log(nameWithRef.current.value)
    setData({
      fullname: "",
      email: "",
      msg: ""
    })
    swal("HOORAY!", "LOGGED IN SUCCESFULLY!", "success");
  }
  return (
    <>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {
              output
            }
            {!isAuthenticated && <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>}
            {isAuthenticated && <div><button className="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
              <Profile />
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
