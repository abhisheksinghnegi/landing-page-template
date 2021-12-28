import React, { useState } from "react";
import swal from 'sweetalert';

const sendmail = require('sendmail')();
 

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const msgInputHandler = (event) => {
      setData((prevState)=>{
        return({
          ...prevState,
          msg: event.target.value
        })
      })
    }
    const fullNameInputHandler = (event) => {
      setData((prevState)=>{
        return({
          ...prevState,
          fullname: event.target.value
        })
      })    }
    const emailInputHandler = (event) => {
      setData((prevState)=>{
        return({
          ...prevState,
          email: event.target.value
        })
      })    }

    const formSubmitHandle = (event) => {
        event.preventDefault();
        // message can be saved to db or email can be sent from here!
        console.log(data)
        setData({
          fullname: "",
          email: "",
          msg: ""
        })
        swal("Sent!", "Message Sent Successfully!", "success");
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={fullNameInputHandler}
                  placeholder="Enter your name"
                />
                <br/>
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={emailInputHandler}
                  placeholder="name@example.com"
                />
              </div>
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Feedback
                </label>
              <div className="mb-3">
                <textarea
                  style={{width:"100%", height:"100%"}}
                  className="form-cogntrol"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={msgInputHandler}
                ></textarea>
                <div className="col-12">
                  <button className="btn btn-outline-primary mt-3" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
