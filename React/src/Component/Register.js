import { useSelector } from "react-redux"

import { Component } from "react"
// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const { useReducer, useState } = require("react");



export default function  RegiStration(){


  const init = {
    name :   {value:"",valid:false , touched:false , error:""},
    email :  {value:"",valid:false , touched:false , error:""},
    contactno :  {value:"",valid:false , touched:false , error:""},
    address :   {value:"",valid:false , touched:false , error:""},
    dob: {value:"",valid:false , touched:false , error:""},
    username:{value:"",valid:false , touched:false , error:""},
    password:{value:"",valid:false , touched:false , error:""},
    role_id: {value:"",valid:false , touched:false , error:""}
    
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
        case 'name':
            var pattern = /^[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}$/ 
            if(!pattern.test(val))
            {
                valid = false;
                error = "First Letter of Name and Surname Should be Capital "
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
            dob : user.dob.value,
            username : user.username.value,
            password : user.password.value,
            role_id : user.role_id.value
        })
    };

    fetch("http://localhost:8081/userRegister",reqOption)
    .then(resp => resp.text())
    .then(str => {    navigate('/login')})
    //     if(str=="true")
    //     {
    //         navigate('/login');
    //     }
    //     return setMsg(str)
    // })
    
    

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
                        
                        <label for="role">Role &nbsp;</label>
                        <select
                            name="role_id"
                            value={user.role_id.value}
                            onChange={(e) => handleChange("role_id", e.target.value)}
                          >
                            <option>Select Role</option>
                            <option value="3">Customer</option>
                            <option value="2">Service Provider</option>
                          </select>
                        <br/>
                        
                    </div>
                        {}
                    <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="name" value={user.name.value}
                onChange={(e)=>{handleChange("name",e.target.value)}} />
                        <label class="form-label" for="form3Example1cg">Enter Name</label>
                        
                    </div>
                    <div class="form-outline mb-3">
                        <input type="email" id="form3Example1cg" class="form-control form-control-lg" name="email" value={user.email.value}
                onChange={(e)=>{handleChange("email",e.target.value)}}/>
                        <label class="form-label" for="form3Example1cg">Enter Email</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="number" id="form3Example1cg" class="form-control form-control-lg"  name="contactno" value={user.contactno.value}
                onChange={(e)=>{handleChange("contactno",e.target.value)}}/>
                        <label class="form-label" for="form3Example1cg">Enter Contact No</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="address" value={user.address.value}
                onChange={(e)=>{handleChange("address",e.target.value)}}/>
                        <label class="form-label" for="form3Example1cg">Enter Address</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="date" id="form3Example1cg" class="form-control form-control-md" name="dob" value={user.dob.value}
                onChange={(e)=>{handleChange("dob",e.target.value)}}/>
                        <label class="form-label" for="form3Example1cg">Date Of Birth</label>
                    </div>
      

                      <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="username" value={user.username.value}
                onChange={(e)=>{handleChange("username",e.target.value)}}/>
                        <label class="form-label" for="form3Example1cg">Enter Username</label>
                      </div>
      
                      <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" name="password" value={user.password.value}
                onChange={(e)=>{handleChange("password",e.target.value)}}/>
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                      </div>
      
                      {/* <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Confirm Password</label>
                      </div> */}
      
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body" onClick={(e)=>{submitData(e)}} >Register</button>
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
