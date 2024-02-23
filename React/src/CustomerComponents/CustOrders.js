import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustOrders() {
    const [labs, setLabs] = useState([]);
    const navigate = useNavigate();
    const [payState, setPay] = useState(0);
    const [labour, setLabour] = useState({});
    
    const uname = localStorage.getItem('uname');

    // Fetching all orders of particular user
    useEffect(() => {
        fetch("http://localhost:8081/custOrders?uname=" + uname)
            .then(resp => resp.json())
            .then(data => setLabs(data))
            .catch(error => console.error("Error fetching data:", error));
            
    }, [uname]);

    // Function to fetch labor information
    const fetchLabourInfo = (labourId) => {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( labourId ) // Ensure to send labourId in JSON format
        };

        fetch("http://localhost:8081/getLabour", options)
          .then((response) => response.json())
          .then((data) => {
            // Handle the fetched data, you may set it to state or perform any other action
            console.log("Labor Info:", data);
            setLabour(data);
            console.log(labour);
          })
          .catch((error) => {
            console.error("Error fetching labor data:", error);
          }); 
    };
    // Function to fetch labor information
    const feedBack = (serviceId,userId) => {
        localStorage.setItem('user_id', userId);
        localStorage.setItem('service_id', serviceId);
        
        navigate('/custFeedback')
    };

    return (
        <div className="container-fluid mt-3">
            <h1>Customer Orders</h1>
            <table className="table table-striped table-hover pt-2">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Payment status</th>
                        {/* <th>Labour Info</th> */}
                    </tr>
                </thead>
                <tbody>
                    {labs.map(order => (
                        <tr key={order.order_id}>
                            <td>{order.booking_id}</td>
                            <td>{order.address}</td>
                            <td>{order.date}</td>
                            <td>{order.payment_status}</td>
                            <td>
    {order.labour_id === 0 ? (
        'Pending'
    ) : (
        <>
            {order.payment_status === 0 ? (
                <button onClick={() => fetchLabourInfo(order.labour_id)}>Fetch Labour Info</button>
            ) : (
                <button className="btn btn-outline-info rounded-pill px-3" onClick={() => feedBack(order.service_id.service_id,order.user_id.user_id)}>FeedBack</button>
            )}
            {labour.name && (
                <div>
                    Name: {labour.name}<br />
                    Contact No: {labour.contactno}
                </div>
            )}
        </>
    )}
</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
