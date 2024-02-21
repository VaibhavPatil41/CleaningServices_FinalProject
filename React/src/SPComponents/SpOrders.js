import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpOrders() {
    const [labs, setLabs] = useState([]);
    const navigate = useNavigate();
    const [payState, setPay] = useState(0);
    
    
    const uname = localStorage.getItem('uname');

    useEffect(() => {
        fetch("http://localhost:8081/spOrders?uname=" + uname)
            .then(resp => resp.json())
            .then(data => setLabs(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    

    return (
        <div className="container-fluid mt-3">
            <h1>Service Provider Orders</h1>
            <table className="table table-striped table-hover pt-2">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Payment status</th>
                        
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
                                {order.payment_status === 0 ? (
                                    // <button onClick={handleFeedback}>Feedback</button>
                                    <button  type="button" class="btn  btn-outline-info btn-sm" >Payment Received</button>
                                ) : (
                                    'Completed'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
