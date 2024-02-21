import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EditLabour() {
  const [labour, setLabour] = useState(null);
    const navigate = useNavigate();

    const labour_id=localStorage.getItem('labour_id')
    //contactno

    const Option={
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(
        labour_id
        )
      };
  
    useEffect(()=> {
      //pass labour id in options
        fetch("http://localhost:8081/getLabour",Option)
        .then( resp => resp.json())
        .then( data => setLabour(data));
    },[]);

    if (labour === null) {
      return <div>Loading...</div>;
  }
//////////////////////////////////////
const handleInputChange = (key, value) => {
  setLabour(prevLabour => ({
    ...prevLabour,
    [key]: value
  }));
};


const submitData = (e) =>{
  e.preventDefault();
 
  const reqOption={
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({

        labour_id : labour_id,
        name : labour.name,
        contactno : labour.contactno,
        pan_no : labour.pan_no, 

          
      })
  };

  fetch("http://localhost:8081/setLabour",reqOption)
  .then(resp => resp.text())
  .then(str => {
      // if(str=="true")
      // {
      //     //navigate('/login');
      // }
      // return setMsg(str)
      //alert("Successfully updated Labour")
      navigate('/spWelcome');
  })
}

    return (
      //labour_id, contactno, name, pan_no, status, sp_id
        <div class="col-md-7 col-lg-8 container-sm mt-5 mx-5">
        <h4 class="mb-3">Edit Labour</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="name" value={labour.name} onChange={(e)=>handleInputChange("name",e.target.value)}/>
              
            </div>

            <div class="col-12">
              <label for="contactno" class="form-label">contactno</label>
              <div class="input-group has-validation">
               
                <input type="number" class="form-control" id="contactno" placeholder="contactno" value ={labour.contactno} onChange={(e)=>handleInputChange("contactno",e.target.value)}/>
             </div>
            </div>

            <div class="col-12">
              <label for="pan_no" class="form-label">pan_no <span class="text-body-secondary"></span></label>
              <input type="text" class="form-control" id="pan_no" value={labour.pan_no} onChange={(e)=>handleInputChange("pan_no",e.target.value)}/>
              <div class="invalid-feedback">
                Please enter valid Pan NO.
              </div>
            </div>

          </div>

          <button class="w-100 btn btn-primary btn-lg mt-3" type="submit" onClick={(e)=>{submitData(e)}}>update</button>
        </form>
      </div>
    )

}