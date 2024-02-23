import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmBooking() {
    const service_id = parseInt(localStorage.getItem('service_id'));
    const user_id = parseInt(localStorage.getItem('user_id'));
    const sp_id = parseInt(localStorage.getItem('sp_id'));
    const [labs, setLabs] = useState(null);
    const [emps, setEmps] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:8081/getService?id=" + service_id)
            .then(resp => resp.json())
            .then(data => setEmps(data));
    }, [service_id]);

    const init = {
        address: { value: "", valid: false, touched: false, error: "" },
        date: { value: "", valid: false, touched: false, error: "" },
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                const { key, value, touched, valid, error } = action.data;
                const updatedState = {
                    ...state,
                    [key]: { value, touched, valid, error }
                };
                const formValid = Object.values(updatedState).every(field => field.valid);
                return { ...updatedState, formValid };
            case 'reset':
                return init;
            default:
                return state;
        }
    };
    
    const[user,dispatch]=useReducer(reducer,init)
    const[msg,setMsg]=useState("")
    var navigate=useNavigate();

    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key) {
            case 'date':
                const currentDate = new Date();
                const enteredDateObj = new Date(val);
                if (isNaN(enteredDateObj) || enteredDateObj < currentDate) {
                    valid = false;
                    error = "Please enter a valid date in the future";
                }
                break;
            case 'address':
                if(val.length < 4 ) {
                    valid = false;
                    error = "Enter a valid address";
                }
                else  
                    {
                        valid = true;
                        error = "";
                    }
                break;
        }
        return { valid, error };
    }

    const handleChange = (key, value) => {
        const { valid, error } = validateData(key, value);
        console.log(`Field ${key} validity:`, valid); // Log field validity
        dispatch({
            type: "update",
            data: { key, value, touched: true, valid, error }
        });
    }
    

    const submitData = (e) => {
        e.preventDefault();
        const reqOption = {
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                date: user.date.value,
                address: user.address.value,
            })
        };
        fetch(`http://localhost:8081/book?sp_id=${sp_id}&pk_id=${service_id}&user_id=${user_id}`, reqOption)
            .then(resp => resp.text())
            .then(str => {
                if(str === "true") {
                    navigate('/login');
                } else {
                    setMsg(str);
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => navigate('/custWelcome'));
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

                                <h4 className="card-title text-center">Booking Details</h4>
                                <div className="container">
                                    <div className="form-group">
                                        <label htmlFor="date">Select Date:</label>
                                        <input type="date" className="form-control" id="date" name="date" value={user.date.value}
                                            onChange={(e) => { handleChange("date", e.target.value) }} />
                                        <div className="text-danger" style={{ display: (!user.date.valid && user.date.touched) ? "block" : "none" }}>
                                            {user.date.error}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Enter Address:</label>
                                        <input type="text" className="form-control" id="address" name="address" value={user.address.value}
                                            onChange={(e) => { handleChange("address", e.target.value) }} />
                                        <div className="text-danger" style={{ display: (!user.address.valid && user.address.touched) ? "block" : "none" }}>
                                            {user.address.error}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-outline-info mt-4" onClick={(e) => { submitData(e) }} disabled={!user.formValid}>Confirm Booking</button>
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
