import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ViewLabour() {
    const[labours, setLabour] = useState([]);
    let [refreshCount, setCount] = useState(0);
    let navigate = useNavigate();
    var sp_id = localStorage.getItem('sp_id');
    //alert(sp_id)

    // const uname=localStorage.getItem('uname');
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(
            sp_id
        )
    };

    useEffect(()=> {
        fetch("http://localhost:8081/viewLabour",options)
        .then(resp => resp.json())
        .then(data => setLabour(data));
    },[refreshCount]);

   
    ////////////////////////////////////////
    const editLabour = (e, labour_id) => {
        e.preventDefault();
        //alert(`Labour id:  ${labour_id}`);

        localStorage.setItem('labour_id', labour_id);
        
        navigate('/editLabour');
         
        // alert(`Labour id:  ${sp_id}`);
        //alert(data.uname)
        //alert(data.pass)
        
        // //alert(emps.login_id.loginid );

        // const options = {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(spId) 
        // };
        
        // fetch("http://localhost:8081/rejectSP", options)
        //     .then((response) => { return response.json(); })
        //     .then((data) => {})
        //     .catch((error) => {}); 
        //     setCount(++refreshCount)
        
    }

    const deleteLabour = (e, labour_id) => {
        e.preventDefault();
        //alert(`Labour id:  ${labour_id}`);

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(labour_id) 
        };
        
        fetch("http://localhost:8081/rejectLabour", options)
            .then((response) => { return response.json(); })
            .then((data) => {})
            .catch((error) => {}); 
        setCount(++refreshCount)


    }

    
    

///////////////////////
    return (
        <div>
            <h1> Labour List </h1>
            <table className="table table-bordered">
                {labours.map((lb, index) => (
                        <tr key={index}>
                            {/* <td>{emp.sp_id}</td> */}
                            {/* <td>{emp.login_id.loginid}</td> */}
                            <td>{lb.name}</td>
                            <td>{lb.contactno}</td>
                            <td>{lb.pan_no}</td>
                            {/* <td>{emp.login_id.loginid}</td> */}
                            {/* <td>{emp.status}</td> */}
                            {/* <td>{emp.sp_id}</td> */}
                            {/* <td>{emp.objectProperty && emp.objectProperty.property}</td> */}
                            <td> <button onClick={(e) => editLabour(e, lb.labour_id)}>Edit</button></td>
                            <td> <button onClick={(e) => deleteLabour(e, lb.labour_id)}>Delete</button></td>

                          
                        </tr>
                ))}
                
            </table>
        </div>
    )

}