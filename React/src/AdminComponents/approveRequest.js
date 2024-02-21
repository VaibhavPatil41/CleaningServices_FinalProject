import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ApproveReq() {
    const [emps, setEmps] = useState([]);
    let navigate = useNavigate();
    let [refreshCount, setCount] = useState(0);
    let x=true;

     //Automatically call when call
    useEffect(() => {
        // Fetch data from the server and update state
        fetch("http://localhost:8081/aproveReq")
            .then(resp => resp.json())
            .then(data => setEmps(data));
    },[refreshCount]);

    const HandleAccept = (e, spId) => {
        
        

        e.preventDefault();
        alert(`Approved ${spId}`);
        
        //alert(emps.login_id.loginid );

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(spId) 
        };
        
        fetch("http://localhost:8081/acceptSP", options)
            .then((response) => { return response.json(); })
            .then((data) => {})
            .catch((error) => {});     
        setCount(++refreshCount)
            //e.preventDefault();
            //navigate('/adminWelcome');
            
        
        
        
        //window.location.reload()
        // fetch("http://localhost:8081/approve")
        // .then((response)=>{return response.json()})
        // .then((data)=>{});
        
    }

    
    const handleReject = (e, spId) => {
        e.preventDefault();
        alert(`Rejected ${spId}`);
        
        //alert(emps.login_id.loginid );

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(spId) 
        };
        
        fetch("http://localhost:8081/rejectSP", options)
            .then((response) => { return response.json(); })
            .then((data) => {})
            .catch((error) => {}); 
            setCount(++refreshCount)
    }

    const HandleChange = (e, spId) => {
        navigate('/adminWelcome')
    }
    
    
    return (
        <div>
            <h1>Approve Request</h1>
            <table className="table table-bordered">
                <tbody>
                    {emps.map((emp, index) => (
                        <tr key={index}>
                            {/* <td>{emp.sp_id}</td> */}
                            {/* <td>{emp.login_id.loginid}</td> */}
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contactno}</td>
                            <td>{emp.address}</td>
                            <td>{emp.license_id}</td>
                            {/* <td>{emp.login_id.loginid}</td> */}
                            {/* <td>{emp.status}</td> */}
                            {/* <td>{emp.sp_id}</td> */}
                            
                            {/* <td>{emp.objectProperty && emp.objectProperty.property}</td> */}
                            <td> <button onClick={(e) => HandleAccept(e, emp.sp_id)}>Approve</button></td>
                            <td> <button onClick={(e) => handleReject(e, emp.sp_id)}>Reject</button></td>

                          
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={(e) => HandleChange()}>Go Back</button>
        </div>
    );
}
