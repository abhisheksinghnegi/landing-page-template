// import React, { useState } from "react";
// import './CardForMedicine.css'
// import cart from '../images/cart.webp'
// import ReactModal from 'react-modal';
// import { show } from "react-modal/lib/helpers/ariaAppHider";
// import medicines from "../images/medicines.jpg"
// const CardForMedicine = (props) => {

//     const [showModal, setShowModal] = useState(false)
//     console.log("showModal ", showModal)
//     const handleOpenModal = () => {
//         setShowModal(true);
//     }

//     const handleCloseModal = () => {
//         setShowModal(false);
//     }
//     return (
//         <div >
//             {/* <button onClick={handleOpenModal}>Trigger Modal</button> */}
//             <div class="container-fluid " onClick={handleOpenModal}>
//                 <div class="row">
//                     <div class="col-12 mt-3">
//                         <div class="card">
//                             <div class="card-horizontal">
//                                 <div class="img-square-wrapper">
//                                     <img className="" style={{ height: "200px", width: "200px" }} src={cart} alt="Card image cap" />
//                                 </div>
//                                 {/* id={value.id} drugName={value.drugName} drugMg={value.drugMg} cost={value.cost} */}
//                                 <div class="card-body">
//                                     <h4 class="card-title"> {props.values.drugName} </h4>
//                                     <p>{props.values.drugMg + " mg"} </p>

//                                     <p>{props.values.quantityperPack} per Pack</p>
//                                     <p class="card-text">₹{"  " + props.values.cost}</p>
//                                 </div>
//                             </div>
//                             <div class="card-footer">
//                                 <small class="text-muted">ID - {props.values.id}</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
//             <ReactModal
//                 isOpen={showModal}
//                 contentLabel="onRequestClose Example"
//                 onRequestClose={handleCloseModal}
//                 ariaHideApp={false}
//             >
//                 <nav className="nav" >
//                     <p className="btn btn-outline-primary" onClick={handleCloseModal}>Back to all Medicines</p>
//                 </nav>
//                 <div className="row">
//                     <div class="photo col-lg-6">
//                         <img style={{ width: "70%", height: "70%", padding: "25px", marginBottom: "20px", marginLeft: "50px" }} src={medicines} />
//                     </div>
//                     <div class="description col-lg-6">

//                         <h1 style={{ display: "inline" }}>{props.values.drugName + "  "}</h1><span >({props.values.drugMg}mg)</span>
//                         <h5>{"ID - " + props.values.id} </h5>
//                         <br />
//                         <br />
//                         <div>
//                             <h3 style={{ display: "inline" }} >$ {props.values.cost + " "}</h3><span >(inc. tax)</span></div>
//                         <br />
//                         <p>It is used to treat bone problems and to aid the growth and development of bones. The capsule contains Vitamin D3, a fat-soluble vitamin that helps the gut to absorb calcium from food and the body to maintain adequate levels of two minerals essential for bone health, calcium and phosphorus. This further enables the body to preserve bone health.
//                             Vitamin D is made by the body when the skin is exposed to sunlight. Sunscreen, protective clothing, limited exposure to sunlight, dark skin, and age may reduce the absorption of sunlight. This may prevent the production of Vitamin D in the body and cause Vitamin D3 Deficiency. Thus, Vitamin D3 in this capsule is essential for calcium absorption in the body. This vitamin is an essential component in our body, which helps in the absorption of calcium and phosphates from the bowel.
//                         </p>
//                         <button className="btn btn-warning" style={{ marginRight: "100px", marginLeft: "50px", fontWeight: "bold", display: "inline" }}>Add to Cart</button>
//                         <button className="btn btn-warning" style={{ marginLeft: "5px", fontWeight: "bold", display: "inline" }}>Buy Now</button>

//                     </div>
//                 </div>
//             </ReactModal>
//             {/* private int id;

// 	private String drugName;
// 	private String drugMg;
// 	private int cost;
// 	private int QuantityperPack;
// 	private String Manufacturer;
// 	private String MaufacturerDate;
// 	private String ExpiryDate; */}
//         </div >
//     )
// }

// export default CardForMedicine;
import React, { useState, useRef } from "react";

import './CardForMedicine.css'

import cart from '../images/cart.webp'

import ReactModal from 'react-modal';

import axios from "axios";



const CardForMedicine = (props) => {



    const [showModal, setShowModal] = useState(false)

    const [quantity, setQuantity] = useState(-2)

    let message = <p></p>;

    const location = useRef()

    console.log("showModal ", showModal)

    const handleOpenModal = () => {

        setShowModal(true);

    }



    const handleCloseModal = () => {

        setQuantity(-2)

        setShowModal(false);

    }
    const locationHandler = () => {

        console.log(location.current.value)

        if (location.current.value.length === 0) {

            message = null;

            alert("Please Enter location")



            return

        }

        axios.get(`http://localhost:8000/go/${props.values.id}/${location.current.value}`)

            .then((response) => {

                console.log(response);

                if (response.data.quantity > 0) {



                    setQuantity(response.data.quantity);



                }

                else {

                    setQuantity(0);

                }

            })

            .catch((error) => {

                setQuantity(-1)

            })

    }
    const addTOCart = () => {

        if (location.current.value.length === 0) {



            alert("Please Enter location")

            return

        }

        else if (quantity <= 0) {

            alert("Currently out of stock at this location")

            return

        }

        else {



        }

    }

    const buyNow = () => {

        if (location.current.value.length === 0) {



            alert("Please Enter location")

            return

        }

        else if (quantity <= 0) {

            alert("Currently out of stock at this location")

            return

        }

    }
    if (quantity > 0) {

        message = <p style={{ color: "green" }}>Total drug available {quantity}</p>



    }

    else if (quantity === 0) {

        message = <p style={{ color: "red" }}>Currently out of stock at this location</p>

    }

    else if (quantity === -1) {

        message = <p style={{ color: "red" }}>Some error occured</p>

    }
    return (

        <div >

            {/* <button onClick={handleOpenModal}>Trigger Modal</button> */}

            <div class="container-fluid " onClick={handleOpenModal}>

                <div class="row">

                    <div class="col-12 mt-3">

                        <div class="card">

                            <div class="card-horizontal">

                                <div class="img-square-wrapper">

                                    <img className="" style={{ height: "200px", width: "200px" }} src={cart} alt="Card image cap" />

                                </div>

                                {/* id={value.id} drugName={value.drugName} drugMg={value.drugMg} cost={value.cost} */}

                                <div class="card-body">

                                    <h4 class="card-title"> {props.values.drugName} </h4>

                                    <p>{props.values.drugMg + " mg"} </p>
                                    <p>{props.values.quantityperPack} per Pack</p>

                                    <p class="card-text">₹{"  " + props.values.cost}</p>

                                </div>

                            </div>

                            <div class="card-footer">

                                <small class="text-muted">ID - {props.values.id}</small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
            <ReactModal

                isOpen={showModal}

                contentLabel="onRequestClose Example"

                onRequestClose={handleCloseModal}

                ariaHideApp={false}

            >

                <nav className="nav" >

                    <p className="btn btn-outline-primary" onClick={handleCloseModal}>Back to all Medicines</p>

                </nav>

                <div className="row" style={{ borderStyle: "groove none none none", height: "100%" }}>

                    <div class="photo col-lg-6" style={{ borderStyle: "none groove none none", height: "100%" }}>

                        <img style={{ width: "50%", height: "50%", padding: "25px" }} src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" />

                    </div>

                    <div class="description col-lg-6" style={{ height: "100%" }}>

                        <br />

                        <h3>{props.values.id} </h3>

                        <h1 style={{ display: "inline" }}>{props.values.drugName + "  "}</h1><span >({props.values.drugMg}mg)</span>

                        <br />

                        <div>

                            <h3 style={{ display: "inline" }} >$ {props.values.cost}</h3><span >(inc. tax)</span></div>

                        <p>Paracetamol is used for pain relief and fever. It is used to relieve pain in conditions like headache, muscle pain, or dental pain.</p>

                        <button className="btn btn-warning" style={{ fontWeight: "bold", display: "inline" }} onClick={addTOCart}>Add to Cart</button>

                        <button className="btn btn-warning" style={{ fontWeight: "bold", display: "inline" }} onClick={buyNow}>Buy Now</button>

                        <div>

                            <label>Enter your Location</label>

                            <input type="text" style={{ display: "inline" }} ref={location} name="location" />

                            <button className="btn btn-success" style={{ display: "inline" }} onClick={locationHandler}>Submit</button>

                        </div>

                        <div>{message}</div>

                    </div>



                </div>

            </ReactModal >
            {/* private int id;

   

    private String drugName;

    private String drugMg;

    private int cost;

    private int QuantityperPack;

    private String Manufacturer;

    private String MaufacturerDate;

    private String ExpiryDate; */}

        </div >

    )

}



export default CardForMedicine;