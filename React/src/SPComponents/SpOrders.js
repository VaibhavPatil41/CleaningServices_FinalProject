import { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function SpOrders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [payState, setPay] = useState(0);
    const [lab_id, setLabour_id] = useState(0);
    const [selectedLabour, setSelectedLabour] = useState({}); // State to store selected labor for each order

    const uname = localStorage.getItem('uname');

    useEffect(() => {
        fetch("http://localhost:8081/spOrders?uname=" + uname)
            .then(resp => resp.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const sp_id = localStorage.getItem('sp_id');
    const [labs, setLabs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/viewEmptyLabour?sp_id=" + sp_id)
            .then(resp => resp.json())
            .then(data => setLabs(data));
    }, []);

    const handleChange = (orderId, value) => {
        setSelectedLabour(prevState => ({
            ...prevState,
            [orderId]: value
        }));
    };

    const submitData = (e, bookingId) => {
        e.preventDefault();
        const selectedLabId = selectedLabour[bookingId];
        console.log("LabID in SubmitData"+selectedLabId)

        //Query For Entering the labourID in booking Table
        fetch("http://localhost:8081/allocateLabour?lab_id=" + selectedLabId + "&booking_id=" + bookingId)
            .then(resp => resp.text())
            .then(str => {
                if (str === "true") {
                    // Handle success
                } else {
                    // Handle failure
                }
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle error
            });


        //Query for Engaging labour 0 => 1
        fetch("http://localhost:8081/engageLabour?lab_id="+ selectedLabId)
            .then(resp => resp.text())
            .then(str => {
                if (str === "true") {
                    // Handle success
                } else {
                    // Handle failure
                }
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle error
            });
            window.location.reload();
    };

    const Payment = (e, bookingId) => {
        e.preventDefault();
    
        // Update payment status
        fetch("http://localhost:8081/updatePayment?booking_id=" + bookingId)
            .then(resp => resp.text())
            .then(str => {
                if (str === "true") {
                    // Handle success
                    console.log("Payment status updated successfully.");
                } else {
                    // Handle failure
                    console.error("Failed to update payment status.");
                }
            })
            .catch(error => {
                console.error("Error updating payment status:", error);
                // Handle error
            });
    

        // Free the labor associated with selectedLabId
        fetch("http://localhost:8081/freeLabourBybook_id?booking_id=" + bookingId)
            .then(resp => resp.text())
            .then(str => {
                if (str === "true") {
                    // Handle success
                    console.log("Labor freed successfully.");
                } else {
                    // Handle failure
                    console.error("Failed to free labor.");
                }
            })
            .catch(error => {
                console.error("Error freeing labor:", error);
                // Handle error
            });
            window.location.reload();
            //console.log("LabID in Payment: "+selectedLabId);
    };
    
    return (
        <div className="container-fluid mt-3">
            <h1>Service Provider Orders</h1>
            <table className="table table-striped table-hover pt-2">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Payment status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.booking_id}>
                            <td>{order.booking_id}</td>
                            <td>{order.address}</td>
                            <td>{order.date}</td>
                            <td>{order.payment_status}</td>
                            <td>
                                {order.labour_id === 0 ? (
                                    <div className="form-outline mb-3">
                                        <select
                                            id={`labourSelect-${order.booking_id}`}
                                            className="form-control form-control-m"
                                            name="labour_name"
                                            placeholder="Select labour"
                                            value={selectedLabour[order.booking_id] || ""}
                                            onChange={(e) => handleChange(order.booking_id, e.target.value)}
                                        >
                                            <option value="">Select Labour</option>
                                            {labs.map((v) => (
                                                <option key={v.labour_id} value={v.labour_id}>{v.name}</option>
                                            ))}
                                        </select>
                                        <button type="button" className="btn btn-outline-info btn-sm mt-1" onClick={(e) => { submitData(e, order.booking_id) }}>Confirm</button>
                                    </div>
                                ) : (
                                    <>
                                        {order.payment_status === 0 ? (
                                            <button type="button" className="btn btn-outline-info btn-sm mt-1" onClick={(e) => { Payment(e, order.booking_id) }}>Payment Received</button>
                                        ) : ('completed')}
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
