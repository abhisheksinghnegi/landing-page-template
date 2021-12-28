import React,{ useState } from "react"
import axios from "axios";

const SearchElement = (props) => {

    const [searchQuery,setSearchQuery] = useState("");

    const clickHandler = ()=>{
        // console.log("Clicked -" + searchQuery)
        // if(searchQuery.length > 0){
        //     axios.get('http://localhost:8000/getdrugs/'+searchQuery)
        //     .then((response) => {
        //         props.onSearch(response.data,true)
        //     })
        //     .catch((error)=>{
        //         props.onSearch([],true)
        //         console.log("error printed",error )
        //     })
        // }else{
        //     props.onSearch([],false)
        // }
        props.onSearch(searchQuery)
    }
    const searchInputHandler = (event) => {
        setSearchQuery(event.target.value)
    }
    return (
    <div className="container" style={{marginTop:"10px"}}>
    <table style={{display:"block"}}>
      <tr>
      <td><input class="form-control mr-sm-2" size="150" onChange={searchInputHandler} value={searchQuery} type="search" placeholder="Search" aria-label="Search"></input></td>
      <td><button class="btn btn-outline-primary my-2 my-sm-0 " style={{marginLeft:"10px"}}  onClick={clickHandler}>Search</button></td>
      </tr>
      </table>
    </div>
    )
}

export default SearchElement
