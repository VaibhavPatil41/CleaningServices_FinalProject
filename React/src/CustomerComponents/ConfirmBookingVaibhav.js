
import { useNavigate } from "react-router-dom";

const { useReducer, useState , useEffect} = require("react");

//const {  useState } = require("react");

export default function ConfirmBooking() {

    const init = {
        date :   {value:"",valid:false , touched:false , error:""},
        address :   {value:"",valid:false , touched:false , error:""},
        
        
        
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
    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'date':
                
            const currentDate = new Date();
            const enteredDateObj = new Date(val);

            if (isNaN(enteredDateObj)) {
                valid = false;
                error = "Please enter a valid date";
            }
            
            else if (enteredDateObj < currentDate) {
                valid = false;
                error = "Date should be in the future";
            }
            break;
                

    
        }
        return { valid: valid, error: error}
    }
    
    
    const handleChange = (key,value) => {
       
        const {valid, error} = validateData(key,value);
    
       
        let formValid = true;
        for(let k in user)
        {
           
            if(user[k].valid === false)
            {
                formValid = false;
                break;
            }
        }
        
        console.log(formValid);
        console.log("------");
    
       
        dispatch({type: "update",data:{key,value,touched:true,valid,error,formValid}})
    }

    const service_id = localStorage.getItem('service_id');
    const user_id = localStorage.getItem('user_id');
    const sp_id = localStorage.getItem('sp_id');
    const [labs, setLabs] = useState(null);
    const [emps, setEmps] = useState(null);

    useEffect(() => {

        fetch("http://localhost:8081/getService?id=" + service_id)
            .then(resp => resp.json())
            .then(data => setEmps(data));
            
    }, []);


    
    useEffect(() => {
        fetch("http://localhost:8081/viewAllLabour?service_id=" +service_id)
            .then(resp => resp.json())
            .then(data => setLabs(data));
           
    }, []);

    const submitData = (e) =>{
        e.preventDefault();

        const reqOption = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                date: user.date.value,
                address: user.address.value,
            })
        };
        

    
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
                                <p className="text-center">Loading...</p>
                            )}
                            
                            {labs ? (
                                <div className="container">
                                    <h4 className="card-title text-center">labour Details</h4>
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Labour Name:</strong> {labs.name}</li>
                                        <li className="list-group-item"><strong>Labour Contact:</strong> {labs.contactno}</li>
                                    </ul>
                                </div>
                            ) : (
                                <p className="text-center">Loading...</p>
                            )}

                            <h4 className="card-title text-center">Booking Details</h4>
                            <div className="container ">
                                <div className="form-group">
                                    <label htmlFor="date">Select Date:</label>
                                    <input type="date" className="form-control" id="date" name="date" value={user.date.value}
                                        onChange={(e)=>{handleChange("date",e.target.value)}}/>
                                        <div className="text-danger" style={{ display: (!user.date.valid)  ?"block":"none"}}>
                                                {user.date.error}
                                        </div>
                                </div>
    
                                <div className="form-group">
                                    <label htmlFor="address">Enter Address:</label>
                                    <input type="text" className="form-control" id="address" name="address" value={user.address.value}
                                        onChange={(e)=>{handleChange("address",e.target.value)}}/>
                                </div>
    
                                <div className="text-center">
                                    <button className="btn btn-outline-info mt-4" onClick={(e)=>{submitData(e)}} disabled={!user.formValid}>Confirm Booking</button>
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
