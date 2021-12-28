import React, {useState} from "react";

const Counter = (props) => {
    const [value,setValue] = useState(500);
    const  buttonHandler = (event) => {
        console.log(event)
        setValue((prevVal)=>{return prevVal+props.title})
    }
    return(
        <div>
            <button onClick={buttonHandler}>+{props.title}</button>
            <p>{value}</p>
        </div>
    )
}

export default Counter