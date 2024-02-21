import img from "../m2H7H7G6G6K9Z5i8.png"

import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom"
import { login } from "../loggedSlice";

import { Component, useReducer, useState } from "react"
import CustWelcome from "../CustomerComponents/CustHome";
// import img from "../Component/re"

export default function  Login(){
    const [loginData, setLoginData] = useState({uname: "",pass: ""});
   // const [login, setspData] = useState({loginid: "",username: "",password:"",role.role_id,role_name});
   const [loginId, setLoginId] = useState();
   const [roleId, setRoleId] = useState();

   //=====================================
   //Validations
   const init = {
    uname:{value:"",valid:false , touched:false , error:""},
    pass:{value:"",valid:false , touched:false , error:""}
    }

    const reducer = (state,action) => {
      switch(action.type)
      {
          case 'update':
             
              const {key,value,touched,valid,error,formValid} = action.data;
              return {...state,[key]:{value,touched,valid,error},formValid}
          
          case 'reset':
              return init;
            }
  }

   const[user,dispatcher]=useReducer(reducer,init)
//===================================================
    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.logged)

    const navigate = useNavigate();
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     dispatch(login());
    //     navigate('/home')
    // }
//===================================================
    const handleLogin = (e) => {
      e.preventDefault();

      
      if(loginData.uname.length < 6 || loginData.pass.length < 6)
      {
        //alert("Please enter ")
        //navigate("/login")
        return
      }

      const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'uname':
                var pattern = /^[A-Z]{1}[a-z]{7,15}$/    // [A-Z]{1}[a-z]{1,}
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "First Letter of Username should be capital and contain 8-15 characters"
                }
                break;
            
            case 'pass':
                var pattern = /^[\w]{8,15}$/ 
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "Password Size 8-15"
                }
                break;
        }
        return { valid: valid, error: error}
    }

    const handleChange = (key,value) => {
       
      const {valid, error} = validateData(key,value);
  
     
      let formValid = true;
      for(let k in user)
      {
         
          if(user[k].valid === false)
          {
              formValid = false;
              break;
          }
      }
      
      console.log(formValid);
      console.log("------");
  
     
      dispatch({type: "update",data:{key,value,touched:true,valid,error,formValid}})
  }

      
      
      const options={
        method: "POST",
        headers: { "content-type": "application/json" },
        body:JSON.stringify({
          uname:loginData.uname,
          pass:loginData.pass
        })
      }

      console.log(options.uname, options.pass)
      fetch("http://localhost:8081/checkLogin",options)
      .then((response)=>{return response.json()})
      .then((data)=>{
        
        //alert(data.loginid)
        //alert(data.role.role_id)

        if(data.role.role_id==1){
          if(data.username==loginData.uname && data.password==loginData.pass)
            {
              // alert(data.username);
              // alert(data.password);
              // alert(loginData.uname);
              alert("welcome ");
             
              localStorage.setItem('pass', loginData.pass);
              localStorage.setItem('uname', loginData.uname);
              // /////////////////////////
              // localStorage.setItem('loginData', loginData);
              // alert(loginData.uname)
              /////////////////
              navigate('/adminWelcome')
            }
            else{
              alert("Invalid Credentials")
              return
            }
          
          // alert("welcome admin");
          // navigate('/adminWelcome')
        }
        if(data.role.role_id==3){
            if(data.username==loginData.uname && data.password==loginData.pass)
            {
              
              const options = {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(data.loginid) 
              };
          
              fetch("http://localhost:8081/getCust", options)
                .then((response) => { return response.json(); })
                .then((data) => {
                  
                    //User Details in local Storage
                    
                    localStorage.setItem('user_id', data.user_id);
                    localStorage.setItem('email', data.name);
                    localStorage.setItem('name', data.login_id);
                   // localStorage.setItem('login_id', data.name);
                    
                  
                  
                })
                .catch((error) => {}); 
                    localStorage.setItem('pass', loginData.pass);
                    localStorage.setItem('uname', loginData.uname);
                navigate('/custWelcome')
            }
            else{
              alert("Invalid Credentials")
              return
            }
        }

        if(data.role.role_id==2){
          ////////////////////////
          if(data.username==loginData.uname && data.password==loginData.pass)
          {
            // alert(data.username);
            //   alert(data.password);
            //   alert(loginData.uname);
            const options = {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(data.loginid) 
            };
          
            fetch("http://localhost:8081/getSP", options)
                .then((response) => { return response.json(); })
                .then((data) => {
                  if(data.status==1)
                  {
                    //localStorage.setItem('pass', loginData.pass);
                    localStorage.setItem('uname', loginData.uname);
                    /////////////////
                    localStorage.setItem('sp_id', data.sp_id);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('license_id', data.license_id);
                    localStorage.setItem('sp_name', data.name);
                    
                    navigate('/spWelcome')
                  }
                  else{
                    alert("You are Not Authorized");
                  }
                  
                })
                .catch((error) => {}); 
          }
          else{
            alert("Invalid Credentials")
            return
          }

          // const options = {
          //   method: "POST",
          //   headers: {"Content-Type": "application/json"},
          //   body: JSON.stringify(data.loginid) 
          // };
        
          // fetch("http://localhost:8081/getSP", options)
          //     .then((response) => { return response.json(); })
          //     .then((data) => {
          //       if(data.status==1)
          //       {
          //         navigate('/spWelcome')
          //       }
          //       else{
          //         alert("You are Not Authorized");
          //       }
                
          //     })
          //     .catch((error) => {});    

          
        }
         
      })  
    };
    

    return(
        // <section class="vh-100 bg-image" style="background-image: ${img};">
        <section class="vh-100 bg-image" >
          {/* <p> Logged in : {mystate.loggedIn.toString()} </p> */}

        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" >
                  <div class="card-body p-5">
                    
                    {/* <img src={img} alt="Description of the image" class="center align-center  text-center mb-5"  height={200} width={200}/> */}
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
      
                    <form>
                  
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" 
                            
                            value={loginData.uname}
                            onChange={(e) => {
                              setLoginData((prevState) => ({
                                ...prevState,
                                uname: e.target.value,
                              }));
                            }}
                        />
                        <label class="form-label" for="form3Example1cg" >Enter User Name</label>
                      </div>
                      <div className="text-danger" style={{ display: (!user.uname.valid)  ?"block":"none"}}>
                          {user.uname.error}
                      </div>

      
                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" 
                          
                          value={loginData.pass}
                          onChange={(e) => { setLoginData((prevState) => ({
                              ...prevState,
                              pass: e.target.value,
                            }));
                          }}
                        />
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                      </div>
                      <div className="text-danger" style={{ display: (!user.pass.valid)  ?"block":"none"}}>
                          {user.pass.error}
                      </div>

                           
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body"
                           value="Login"
                          //  className="btn btn-success"
                           onClick={(e) => {
                             handleLogin(e);
                           }}
                          >Login</button>
                      </div>
      
                      {/* <p class="text-center text-muted mt-5 mb-0">New User?<a href="#!"
                          class="fw-bold text-body"><u>SignUp Here</u></a></p> */}

                        {/* <p class="text-center text-muted mt-5 mb-0">New User?
                        <Link to="/reg"><u>SignUp Here</u></Link></p> */}

                        <p class="text-center text-muted mt-5 mb-0">New here?
                          <a href="/regcus"class="fw-bold text-body mx-2"><u>Customer</u></a>
                          <a href="/regsp" class="fw-bold text-body mx-2"><u>Service Provider</u></a>
                        </p>

                  
      
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