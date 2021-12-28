import React,{useState} from "react";
import AllMedicineList from "./AllMedicineList";
import SearchElement from './SearchElement'
import axios from "axios";
import checkNumeric from '../Helper'


const AllMedicineListWrapper = ()=>{
    const[medicineListState,setMedicineListState] = useState({medicineList:[],firstTime:true})
     if(medicineListState.firstTime){
        axios.get('http://localhost:8000/getalldrugs')
            .then((response) => {
                    setMedicineListState({medicineList:response.data,firstTime:false})
                })
                .catch((error)=>{
                    setMedicineListState({medicineList:[],firstTime:false})
                })
    }
    // axios.get('http://localhost:8000/getalldrugs')
    //     .then((response) => {
    //             setMedicineList(response.data)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //             setMedicineList([])
    //         })
    const onSearchQuery = (searchQuery)=>{
        console.log(searchQuery)
        if(searchQuery.length > 0){
            if(checkNumeric(searchQuery)){
            axios.get('http://localhost:8000/getdrugs/'+searchQuery)
                .then((response) => {
                    setMedicineListState(prevValue=>{
                        return {...prevValue,medicineList:response.data}
                    })
                })
                .catch((error)=>{
                    setMedicineListState(prevValue=>{
                        return {...prevValue,medicineList:[]}
                    })
                    console.log("error printed",error )
                })
            }else{
                axios.get('http://localhost:8000/getbyname/'+searchQuery)
                .then((response) => {
                    setMedicineListState(prevValue=>{
                        return {...prevValue,medicineList:response.data}
                    })
                })
                .catch((error)=>{
                    setMedicineListState(prevValue=>{
                        return {...prevValue,medicineList:[]}
                    })
                    console.log("error printed",error )
                })
            }
        }else{
            axios.get('http://localhost:8000/getalldrugs')
            .then((response) => {
                setMedicineListState(prevValue=>{
                    return {...prevValue,medicineList:response.data}
                })
            })
            .catch((error)=>{
                console.log(error)
                setMedicineListState(prevValue=>{
                    return {...prevValue,medicineList:[]}
                })
            })
        }
    }
    return(
        <div>
            <SearchElement onSearch={onSearchQuery}/>
            <AllMedicineList giveMedicineList={medicineListState.medicineList}/>
        </div>
    )
}

export default AllMedicineListWrapper