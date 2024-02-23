import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ViewServicesSP() {
    const[service, setService] = useState([]);
    let navigate = useNavigate();

        const sp_id =  localStorage.getItem('sp_id');
    useEffect(()=> {
        fetch("http://localhost:8081/viewServices?sp_id="+sp_id)
        .then( resp => resp.json() )
        .then( data => setService(data));
    },[]);

    return (
        <div className="conatiner-fluid mt-3">
            <h1> Packages </h1>
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
                                {/* <td> <a onClick={()=>{navigate('/updateService',{state: v})}}><button class="btn btn-info rounded-pill px-3" type="button"  >EDIT</button></a> </td> 
                                <td> <a onClick={()=>{navigate('/deleteService',{state: v})}}><button class="btn btn-danger rounded-pill px-3" type="button" >DELETE</button></a> </td> */}
                                <br/>
                            </tr>
                        )
                   }) 
             }
             
            </table>
           
        </div>
    )

}

{/* <div class="d-flex gap-2 justify-content-center py-5">
  <button class="btn btn-primary rounded-pill px-3" type="button">Primary</button>
  <button class="btn btn-secondary rounded-pill px-3" type="button">Secondary</button>
  <button class="btn btn-success rounded-pill px-3" type="button">Success</button>
  <button class="btn btn-danger rounded-pill px-3" type="button">Danger</button>
  <button class="btn btn-warning rounded-pill px-3" type="button">Warning</button>
  <button class="btn btn-info rounded-pill px-3" type="button">Info</button>
  <button class="btn btn-light rounded-pill px-3" type="button">Light</button>
  <button class="btn btn-dark rounded-pill px-3" type="button">Dark</button>
  <button class="btn btn-link rounded-pill px-3" type="button">Link</button>

  <a onClick={()=>{navigate('/updateService',{state: v})}}>EDIT</a>
  <a onClick={()=>{navigate('/deleteService',{state: v})}}>DELETE</a>
</div> 

 <div class="d-flex">
     <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body " onClick={navigate('/addService')} >Add Package</button> 
                        <button class="btn btn-dark rounded-pill px-3" onClick={navigate('/addService')}>Dark</button> 
                      </div>


*/}