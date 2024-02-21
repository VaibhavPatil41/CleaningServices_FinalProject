import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CustDiplayService() {
    const[service, setService] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    let navigate = useNavigate();

        //const sp_id = service.sp_id.value
    // useEffect(()=> {
    //     fetch("http://localhost:8073/home?catid="+101)
    //     .then( resp => resp.json() )
    //     .then( data => setService(data));
    // },[]);

        
    useEffect(() => {
        fetch(`http://localhost:8081/home?catid=${categoryId}`)
            .then(resp => resp.json())
            .then(data => setService(data));
    }, [categoryId]);

    const handleCategoryChange = (e) => {
        setCategoryId(e.target.value);
    };

    const handleClick = (v) => {
        console.log("This for Demo");
        console.log(v);
        localStorage.setItem('service_id',v.service_id)
        localStorage.setItem('sp_id',v.sid.sp_id)
        navigate('/confirmBook');
    }

    return (
        <div className="conatiner-fluid mt-3">
            
            <h1> Packages </h1>
            <div className="mb-3  col-3">
                <label htmlFor="categorySelect" className="form-label">Select Category:</label>
                <select
                    id="categorySelect"
                    className="form-select"
                    value={categoryId}
                    onChange={handleCategoryChange}
                >
                    <option value={1}>1BHK</option>
                    <option value={2}>2BHK</option>
                    <option value={3}>3BHK</option>
                    <option value={4}>Kitchen</option>
                    <option value={5}>Bathroom</option>
                    <option value={6}>Sofa and Carpet</option>
                    
                </select>
            </div>
            <table class="table table-striped table-hover pt-2 container-m mt-3" >
                <thead>
                    <tr>
                        <th>
                            Package Name
                        </th>
                        <th>
                            Pakage Description
                        </th>
                        <th>
                            Package Price
                        </th>
                        
                    </tr>
                </thead>
                
            {
                   service.map((v)=>{
                        return (
                            <tr>
                                <td>{v.sname}</td>
                                <td>{v.description}</td>
                                <td>{v.price}</td>
                                <a onClick={() => handleClick(v)}>
    <button class="btn btn-info rounded-pill px-3" type="button">BOOK</button>
</a>


                               
                                <br/>
                            </tr>
                        )
                   }) 
             }
             
            </table>
           
        </div>
    )

}

