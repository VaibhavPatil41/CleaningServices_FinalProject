
import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmBooking() {
    const service_id = parseInt(localStorage.getItem('service_id'));
    const user_id = parseInt(localStorage.getItem('user_id'));
    const sp_id = parseInt(localStorage.getItem('sp_id'));
    const [labs, setLabs] = useState(null);
    const [emps, setEmps] = useState(null);
    
    // Combine API fetches into a single useEffect hook
    useEffect(() => {
        // fetch("http://localhost:8081/viewAllLabour?service_id=" + service_id)
        //     .then(resp => resp.json())
        //     .then(data => setLabs(data));

        fetch("http://localhost:8081/getService?id=" + service_id)
            .then(resp => resp.json())
            .then(data => setEmps(data));
    }, [service_id]);



    const init = {
        address:   {value:"",valid:false , touched:false , error:""},
        date :  {value:"",valid:false , touched:false , error:""},
       
        
    }


    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'update':
               
                const {key,value,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value,touched,valid,error},formValid}
            
            case 'reset':
                return init;        
        }
    }

    const[user,dispatch]=useReducer(reducer,init)
    const[msg,setMsg]=useState("")
    var navigate=useNavigate();
    const submitData = (e) =>{
        e.preventDefault();
       
    
    
    
        const reqOption={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                
                date : user.date.value,
                address : user.address.value,
                
            })
        };
            
        console.log(sp_id)
        console.log(service_id)
        console.log(user_id)
        fetch("http://localhost:8081/book?sp_id=" + parseInt(sp_id) + "&pk_id=" + parseInt(service_id) + "&user_id=" + parseInt(user_id), reqOption)
        //fetch("http://localhost:8081/book?sp_id="+1+"&pk_id="+23+"&user_id="+2, reqOption)
        .then(resp => resp.text())
        .then(str => {
            if(str=="true")
            {
                navigate('/login');
            }
            return setMsg(str)
        })
        
        navigate('/custWelcome')
    
    }
    const handleChange = (key, value) => {
        let formValid = true;
        if (user && user[key]) { // Check if user and user[key] are defined
            const { valid } = user[key]; // Destructure valid from user[key]
            if (valid === false) {
                formValid = false;
            }
        } else {
            formValid = false; // If user or user[key] is undefined, form is considered invalid
        }
        dispatch({ type: "update", data: { key, value, touched: true } });
    }

    

    return (
      
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 mt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card">
                        <div className="card-body p-5">
                            {emps ? (
                                <div className="container">
                                    <h4 className="card-title text-center">Package Details</h4>
                                    <ul className="list-group">
                                    <li className="list-group-item"><strong>Package Name:</strong> {emps.sname}</li>
                                        <li className="list-group-item"><strong>Facilities:</strong> {emps.description}</li>
                                        <li className="list-group-item"><strong>Price:</strong> {emps.price}</li>
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-center">NA</p>
                            )}
                            
                            {/* {labs ? (
                                <div className="container">
                                    <h4 className="card-title text-center">labour Details</h4>
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Labour Name:</strong> {labs.name}</li>
                                        <li className="list-group-item"><strong>Labour Contact:</strong> {labs.contactno}</li>
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-center">NA</p>
                            )} */}

                            <h4 className="card-title text-center">Booking Details</h4>
                            <div className="container ">
                                <div className="form-group">
                                    <label htmlFor="date">Select Date:</label>
                                    <input type="date" className="form-control" id="date" name="date" value={user.date.value}
                                        onChange={(e)=>{handleChange("date",e.target.value)}}/>
                                </div>
    
                                <div className="form-group">
                                    <label htmlFor="address">Enter Address:</label>
                                    <input type="text" className="form-control" id="address" name="address" value={user.address.value}
                                        onChange={(e)=>{handleChange("address",e.target.value)}}/>
                                </div>
    
                                <div className="text-center">
                                    <button className="btn btn-outline-info mt-4" onClick={(e)=>{submitData(e)}}>Confirm Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
}
