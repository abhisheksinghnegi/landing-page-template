import React, {useState} from "react";
import AllMedicineListData from "./AllMedicineListData";
import CardForMedicine from "./CardForMedicine";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllMedicineList.css'
// import DrugMS from "./DrugMS";
// import drugMS from "./DrugMS";
import axios from 'axios'


const AllMedicineList = (props)=>{
    console.log(props.giveMedicineList)
    let medicineData = props.giveMedicineList
    let outputMedicinalData = <p className="not_found" >No Values Found</p>
    if(medicineData.length > 0){
        outputMedicinalData =  medicineData.map((value,index)=>{
            return (<div className="container" ><CardForMedicine key={value.id} values={value}/></div>)
        })
    }else if(typeof(medicineData.length) == "undefined" ){
        return (<div className="container" ><CardForMedicine key={medicineData.id} values={medicineData}/></div>)
    }
    return(
    <div>
        {
           outputMedicinalData
        }
    </div>
    )
}

export default AllMedicineList; 