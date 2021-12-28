// how to use states 
import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = (props) => {
    const [message,setMessage] = useState("Initial Value");
    const clickHandler = ()=>{
        setMessage(props.message)
    }
    return(
        // <div>
        // <button onClick={clickHandler}>{props.title}</button>
        // <p>{message}</p>
        // </div>
        <div class="modal-dialog modal-dialog-scrollable">

        </div>
        
    )
}

export default Button