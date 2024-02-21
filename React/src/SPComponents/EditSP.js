import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";
//import Services from "../Component/Services";

export default function EditSP() {
  
  const [emps, setEmps] = useState(null);
    const navigate = useNavigate();

    const uname=localStorage.getItem('uname');
    //const uname= "SushantPatil"
    //const uname="MaheshP"

    // useEffect(()=> {
    //     fetch("http://localhost:8081/editProfileSp?uname="+uname)/////////////
    //     .then( resp => resp.json())
    //     .then( data => setEmps(data));
    // },[]);

    useEffect(() => {
      // Fetch data from the endpoint
      fetch(`http://localhost:8081/editProfileSp?uname=${uname}`)
        .then(resp => resp.json())
        .then(data => setEmps(data));
    }, []);
    
    

    if (emps === null) {
      return <div>Loading...</div>;
    }

  // const Option={
  //   method:"POST",
  //   headers:{'content-type':'application/json'},
  //   body:JSON.stringify(
  //     //uname
  //     )
  //   };

    const handleInputChange = (key, value) => {
      setEmps(prevState => ({
        ...prevState,
        [key]: value
      }));
    };
    

const submitData = (e) =>{
  
  e.preventDefault();
  console.log(emps);
  const reqOption={
      method:"PUT",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
          
          name : emps.name,
          email : emps.email,
          contactno : emps.contactno,
          address : emps.address, 
          username : emps.username,
          password : emps.password,
          license_id : emps.license_id
      })
  };
  
  console.log(reqOption);
  //fetch(`http://localhost:8081/updateProfileSp/${MaheshP}`, reqOption)
  fetch(`http://localhost:8081/updateProfileSp/${uname}`, reqOption)///////
    .then(resp => resp.text())
    .then(str => {
      alert(str);
      alert("Successfully Updated Customer");
      window.location.reload();
    });
  
}



    return (

      //name  email contactno address password username license_id
        <div class="col-md-7 col-lg-8 container-sm mt-5 mx-5">
        <h4 class="mb-3">Edit Profile</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="name" value={emps.name} onChange={(e)=>handleInputChange("name",e.target.value)}/>
              
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="email" placeholder="email" value ={emps.email} onChange={(e)=>handleInputChange("email",e.target.value)}/>
             </div>
            </div>

            <div class="col-12">
              <label for="contactno" class="form-label">Contactno</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="contactno" placeholder="contactno" value ={emps.contactno} onChange={(e)=>handleInputChange("contactno",e.target.value)}/>
             </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address"  required="" value={emps.address} onChange={(e)=>handleInputChange("address",e.target.value)}/>
             
            </div>

            <div class="col-12">
              <label for="password" class="form-label">Password <span class="text-body-secondary"></span></label>
              <input type="password" class="form-control" id="password" value={emps.password} onChange={(e)=>handleInputChange("password",e.target.value)}/>
              <div class="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>
           
            <div class="col-12">
              <label for="username" class="form-label">Username <span class="text-body-secondary"></span></label>
              <input type="text" class="form-control" id="username" value={emps.username} onChange={(e)=>handleInputChange("username",e.target.value)}/>
              <div class="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>

            <div class="col-12">
              <label for="license_id" class="form-label">License_id <span class="text-body-secondary"></span></label>
              <input type="text" class="form-control" id="license_id" value={emps.license_id} onChange={(e)=>handleInputChange("license_id",e.target.value)}/>
              <div class="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>

            

            




           

            
          </div>

         

          <button class="w-100 btn btn-primary btn-lg mt-3" type="submit" onClick={(e)=>{submitData(e)}}>update</button>
        </form>
      </div>
    )

}