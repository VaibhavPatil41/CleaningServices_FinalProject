import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ApproveReq() {
    const [emps, setEmps] = useState([]);
    let navigate = useNavigate();
    let [refreshCount, setCount] = useState(0);

    // Automatically call when called
    useEffect(() => {
        // Fetch data from the server and update state
        fetch("http://localhost:8081/aproveReq")
            .then(resp => resp.json())
            .then(data => setEmps(data));
    }, [refreshCount]);

    const HandleAccept = (e, spId) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(spId)
        };

        fetch("http://localhost:8081/acceptSP", options)
            .then((response) => response.json())
            .then((data) => {})
            .catch((error) => {});

        setCount(++refreshCount);
    }

    const handleReject = (e, spId) => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(spId)
        };

        fetch("http://localhost:8081/rejectSP", options)
            .then((response) => response.json())
            .then((data) => {})
            .catch((error) => {});

        setCount(++refreshCount);
    }

    const HandleChange = (e, spId) => {
        navigate('/adminWelcome');
        window.location.reload();
    }

    return (
        <div>
            <h1>Approve Request</h1>
            {emps.length === 0 ? (
                <p>No data available</p>
            ) : (
                <table className="table table-bordered">
                    <tbody>
                        {emps.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.contactno}</td>
                                <td>{emp.address}</td>
                                <td>{emp.license_id}</td>
                                <td>
                                    <button className="btn btn-outline-info" onClick={(e) => HandleAccept(e, emp.sp_id)}>Approve</button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info" onClick={(e) => handleReject(e, emp.sp_id)}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="mt-3">
                <button className="btn btn-outline-info" onClick={(e) => HandleChange(e)}>Go Back</button>
            </div>
        </div>
    );
}
