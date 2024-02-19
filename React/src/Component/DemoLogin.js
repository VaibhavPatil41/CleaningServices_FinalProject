import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { login } from "../Slices/loginSlice";
import { Link, useNavigate } from "react-router-dom";
//import './RegisterCSS.css'

const DemoLogin = () => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();

 // const loginState = useSelector((state) => state.logged.loggedIn);
  
  const [loginData, setLoginData] = useState({uname: "",pass: "",});

  const handleLogin = (e) => {
    e.preventDefault();
    const options={
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify({
        uname:loginData.uname,
        pass:loginData.pass
      })
    }
    console.log(options.uname, options.pass)
    fetch("http://localhost:8080/login",options)
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data);

    
      if(data==1){
        //dispatch(login())
        //  if(loginState){
        //   navigate("/Admin")
        //  }
        navigate("/Admin")
           
         }
         if(data==2){
           //dispatch(login())
        //    if(loginState){
        //      navigate("/Trekker")
        //    }
        navigate("/Trekker")
         }
         if(data==3){
            //dispatch(login())
            //  if(loginState){
            //   navigate("/TrekkingClub")
            //  } 
            navigate("/TrekkingClub")         
        }
         if(data==-1){
           alert("Invalid Credentials")
         
           navigate("/LoginUser")
         }
    })
   
  };

  return (
    <>
    <div className="container">
      <form className="fonm-control">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
           <b>Username</b>
          </label>
          
            <input
              type="text"
              class="form-control"
              id="inputUname"
              placeholder="(Enter your Username)"
              value={loginData.uname}
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  uname: e.target.value,
                }));
              }}
            />
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
           <b> Password</b>
          </label>
          
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="(Enter your password)"
              value={loginData.pass}
              onChange={(e) => { setLoginData((prevState) => ({
                  ...prevState,
                  pass: e.target.value,
                }));
              }}
            />
          
        </div>
        <div> 
          <br />
          <input
            type="submit"
            value="Login"
            className="btn btn-success"
            onClick={(e) => {
              handleLogin(e);
            }}
          />
        </div>
        <div className="signup">
            <span className="signup">Don't have an Account?
              <Link to="/UserRegistration">Signup</Link>
            </span>
          </div>
      </form>
    </div>
    </>
  );
};

export default DemoLogin;