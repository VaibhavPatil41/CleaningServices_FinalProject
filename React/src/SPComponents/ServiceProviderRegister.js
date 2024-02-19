import { useSelector } from "react-redux"

import { Component } from "react"
// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const { useReducer, useState } = require("react");



export default function  RegiStrationS(){


  const init = {
    name :   {value:"",valid:false , touched:false , error:""},
    email :  {value:"",valid:false , touched:false , error:""},
    contactno :  {value:"",valid:false , touched:false , error:""},
    address :   {value:"",valid:false , touched:false , error:""},
    username:{value:"",valid:false , touched:false , error:""},
    password:{value:"",valid:false , touched:false , error:""},
    license_id: {value:"",valid:false , touched:false , error:""}
    
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

const[user,dispatch]=useReducer(reducer,init)
const[msg,setMsg]=useState("")

var navigate=useNavigate();
const validateData = (key,val) => {
    let valid = true;
    let error = ""
    switch(key)
    {
        case 'username':
            var pattern = /^[A-Z]{1}\w{7,15}$/    // [A-Z]{1}[a-z]{1,}
            if(!pattern.test(val))
            {
                valid = false;
                error = "First Letter of Username should be capital and contain 8-15 characters"
            }
            break;
        
        case 'password':
            var pattern = /^[\w]{8,15}$/ 
            if(!pattern.test(val))
            {
                valid = false;
                error = "Password Size 8-15"
            }
            break;

        case 'email':
            var pattern = /^[\w.#-]{4,20}@[\w-]{5,15}\.[a-z]{2,3}$/ 
            if(!pattern.test(val))
            {
                valid = false;
                error = "Please Enter valid Email"
            }
            break;
        
        case 'contactno':

            var pattern= /^\d{10}$/;
            if(!pattern.test(val))
            {
            valid = false;
            error = "Contact number should be 10 digits"
            }
            break;
        case 'license_id':
            var pattern=/^[A-Za-z]{4}\d{5}$/;
            if(!pattern.test(val))
            {
            valid = false;
            error = "License id should contain 4 characters and 5 digits"
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

const submitData = (e) =>{
    e.preventDefault();
   



    const reqOption={
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
            
            name : user.name.value,
            email : user.email.value,
            contactno : user.contactno.value,
            address : user.address.value,
            username : user.username.value,
            password : user.password.value,
            license_id : user.license_id.value,
            role_id:2
        })
    };

    fetch("http://localhost:8081/spRegister",reqOption)
    .then(resp => resp.text())
    .then(str => {alert("done")
        // if(str=="true")
        // {
        //     navigate('/login');
        // }
        // return setMsg(str)
        navigate('/login');
    })
    
    

}
    
  //const mystate = useSelector(state=>state.logged)

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
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>
      
                    <form>
                    
                        
                    <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example1cg">Enter Name</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="name" value={user.name.value}
                onChange={(e)=>{handleChange("name",e.target.value)}} />
                    </div>
                    <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example1cg">Enter license id</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="license_id" value={user.license_id.value}
                onChange={(e)=>{handleChange("license_id",e.target.value)}} />
                 <div className="text-danger" style={{ display: (!user.license_id.valid)  ?"block":"none"}}>
                {user.license_id.error}
            </div>
                    </div>
                    <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example1cg">Enter Email</label>
                        <input type="email" id="form3Example1cg" class="form-control form-control-lg" name="email" value={user.email.value}
                onChange={(e)=>{handleChange("email",e.target.value)}} placeholder="example@gmail.com"/>
                        
                        <div className="text-danger" style={{ display: (!user.email.valid)  ?"block":"none"}}>
                {user.email.error}
            </div>
                    </div>
                    
                    <label class="form-label" for="form3Example1cg">Enter Contact No</label>
                    <div class="form-outline mb-3">
                      
                        <input type="number" id="form3Example1cg" class="form-control form-control-lg"  name="contactno" value={user.contactno.value}
                onChange={(e)=>{handleChange("contactno",e.target.value)}}/>
                        <div className="text-danger" style={{ display: (!user.contactno.valid)  ?"block":"none"}}>
                          {user.contactno.error}
                        </div>
                    </div>

                    <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example1cg">Enter Address</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="address" value={user.address.value}
                onChange={(e)=>{handleChange("address",e.target.value)}}/>
                        
                    </div>
                      <div class="form-outline mb-3">
                      <label class="form-label" for="form3Example1cg">Enter Username</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="username" value={user.username.value}
                onChange={(e)=>{handleChange("username",e.target.value)}}/>
                        <div className="text-danger" style={{ display: (!user.username.valid)  ?"block":"none"}}>
                {user.username.error}
            </div>
                      </div>
      
                      <div class="form-outline mb-3">
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" name="password" value={user.password.value}
                onChange={(e)=>{handleChange("password",e.target.value)}}/>
                        <div className="text-danger" style={{ display: (!user.password.valid)  ?"block":"none"}}>
                {user.password.error}
            </div>
                      </div>
      
                      {/* <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Confirm Password</label>
                      </div> */}
      
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body" onClick={(e)=>{submitData(e)}} disabled={!user.formValid}>Register</button>
                      </div>
      
                      <p class="text-center text-muted mt-5 mb-0">Already have an account? 
                            <a href="/login" class="fw-bold text-body"><u>Login here</u></a></p>
      
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
