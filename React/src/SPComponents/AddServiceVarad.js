import { useReducer, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddService() {

  const sp_name = localStorage.getItem('sp_name');
  console.log(sp_name)


  const[cat, setCat] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/viewAllCat")
      .then(resp => resp.json())
      .then(data => setCat(data));
  }, []);





  const init = {
    sname :  {value:"",valid:false , touched:false , error:""},
    description : {value:"",valid:false , touched:false , error:""},
    price: {value:"",valid:false , touched:false , error:""},
    category: {value:"",valid:false , touched:false , error:""},
    spname: {value:""}
    //labour_name: {value:"",valid:false , touched:false , error:""}
    
    
  }



const reducer = (state,action) => {
    switch(action.type)
    {
        case 'update':
           
            const {key,value,touched,valid,error,formValid} = action.data;
            return {...state,[key]:{value,touched,valid,error},formValid}
        
        case 'reset':
            return init; 
       
            default :
            return state;       
    }
}

const[user,dispatch]=useReducer(reducer,init)
// const[msg,setMsg]=useState("")

const validateData = (key, val) => {
    let valid = true;
    let error = "";

    // Check if the value is empty
    if (val === "") {
        valid = false;
        error = "This field is required";
    }

    return { valid: valid, error: error };
};

const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);
   // console.log(Field ${key}: valid - ${valid}, error - ${error});

    dispatch({
        type: "update",
        data: {
            key,
            value,
            touched: true,
            valid,
            error,
            // Calculate form validity based on all fields
            formValid: Object.values(user).every(field => field.value !== '' || field.value!==null)
        }
    });

    console.log("Form Valid:", Object.values(user).every(field => field.value !== ''));
    console.log("User State:", user);
};


var navigate=useNavigate();

    const submitData = (e) => {
        e.preventDefault();

        const reqOption = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({

                description: user.description.value,
                price:user.price.value,
                sname: user.sname.value,
                status: 1,
                catname: user.category.value,
                spname:sp_name    

            })
            
        };

      
       
            fetch("http://localhost:8081/addService", reqOption)
            .then(resp => resp.text())
            .then(str => {
                //return navigate('/spWelcome');
                window.location.reload();
            })
            .catch(error => {
                navigate('/spWelcome');
            });

            //alert(user.labour_name.value)
    };

    return (
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Add Package</h2>
                                    <form>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="packageName">Package Name</label>
                                            <input type="text" id="serviceName" className="form-control form-control-lg" name="sname" value={user.sname.value}
                                                onChange={(e) => { handleChange("sname", e.target.value) }}/>
                                           <div className="text-danger" style={{ display: (!user.sname.valid)  ?"block":"none"}}>
                                                {user.sname.error}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Package Facilities</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                        value={user.description.value}
                                                        onChange={(e) => { handleChange("description", e.target.value) }}>
                                                    </textarea>
                                                    <div className="text-danger" style={{ display: (!user.description.valid)  ?"block":"none"}}>
                                                {user.description.error}
                                            </div>
                                        </div>
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="price">Package Price</label>
                                            <input type="text" id="price" className="form-control form-control-lg" name="price" placeholder="₹" value={user.price.value}
                                                onChange={(e) => { handleChange("price", e.target.value) }} />
                                            <div className="text-danger" style={{ display: (!user.price.valid) ? "block" : "none" }}>
                                                {user.price.error}
                                            </div>
                                            {/* <div className="text-danger" style={{ display: (!user.price.valid)  ?"block":"none"}}>
                                                {user.price.error}
                                            </div> */}
                                        </div>
                                        
                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="category">Package Category</label>

                                            <select
                                                type="text"
                                                id="price"
                                                className="form-control form-control-lg"
                                                name="category"
                                                placeholder="Select Category"
                                                value={user.category.value}
                                                onChange={(e) => { handleChange("category", e.target.value) }}
                                                                                                                                >
                                                <option value="">Add Package</option>
                                                {
                                                    cat.map((v) => {
                                                        return (
                                                            <option value={v.catname}>{v.catname}</option>
                                                        );
                                                    })
                                                }
                                            </select> 
                                            <div className="text-danger" style={{ display: (!user.category.valid)  ?"block":"none"}}>
                                                {user.category.error}
                                            </div>  
                                            </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-outline-info btn-block btn-lg gradient-custom-4 text-body" onClick={(e) => { submitData(e) }}disabled={!user.formValid}>Add Package </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                           </div> 
                           </div> 
                           </div> 
                           </div>
                           </section> 

)
    }