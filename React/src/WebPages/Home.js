import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {
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

    return (
        <div className="conatiner-fluid mt-3">
            <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand d-md-none" href="#">
      <svg class="bi" width="24" height="24"></svg>
      Aperture
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-grow-1 justify-content-between">
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"></svg>
          </a></li>
          <li class="nav-item"><a class="nav-link" href="/Login" onClick={(e)=>{"/Login"}}>Login</a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="/regsp">Register as Service Provider</a></li>
          <li class="nav-item"><a class="nav-link" href="/regcus">Register as Customer</a></li>
          <li class="nav-item"><a class="nav-link" href="#"></a></li>
          <li class="nav-item"><a class="nav-link" href="/Contacts">Contact us?</a></li>
          
          <li class="nav-item"><a class="nav-link" href="#">
            <svg class="bi" width="24" height="24"></svg>
          </a></li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
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
                                <td> <a onClick={()=>{navigate('/login',{state: v})}}><button class="btn btn-info rounded-pill px-3" type="button">BOOK</button></a> </td> 
                                
                               
                                <br/>
                            </tr>
                        )
                   }) 
             }
             
            </table>
           
        </div>
    )

}

