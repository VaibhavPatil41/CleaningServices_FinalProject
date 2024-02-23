import { useSelector } from "react-redux"
import { useEffect } from "react";
import { Nav, NavDropdown,Navbar,Container} from "react-bootstrap";
import { Component } from "react"
// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Login from "../Component/Login";
import RegiStrationS from "../SPComponents/ServiceProviderRegister";
import AboutUs from "../landingPages/AboutUs";
import ContactUs from "../landingPages/ContactUs";
import Footer from "../landingPages/Footer";

const { useReducer, useState } = require("react");



export default function  RegiStration1(){

  const[buttonDisable,setButtonDisable]=useState(false)

  const init = {
    name :   {value:"",valid:false , touched:false , error:""},
    email :  {value:"",valid:false , touched:false , error:""},
    contactno :  {value:"",valid:false , touched:false , error:""},
    address :   {value:"",valid:false , touched:false , error:""},
    dob: {value:"",valid:false , touched:false , error:""},
    username:{value:"",valid:false , touched:false , error:""},
    password:{value:"",valid:false , touched:false , error:""},
    // role_id: {value:"",valid:false , touched:false , error:""}
    formValid:false
    
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
        case 'dob':
                
            const currentDate = new Date("01/01/2006");
            const enteredDateObj = new Date(val);

            if (isNaN(enteredDateObj)) {
                valid = false;
                error = "Please enter a valid date of birth";
            }
            
            else if (enteredDateObj > currentDate) {
                valid = false;
                error = "Age Should be greater than 18";
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

    }
    return { valid: valid, error: error}
}


const handleChange = (key,value) => {
   
    const {valid, error} = validateData(key,value);

   
    let formValid = true;
    for(let k in user)
    {
       
        if(user[k].valid == false || user[k].touched == false )
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
            role_id : 3
        })
    };

    fetch("http://localhost:8081/userRegister",reqOption)
    .then(resp => resp.text())
    .then(str => {
        // if(str=="true")
        // {
        //     //navigate('/login');
        // }
        // return setMsg(str)
        //alert("Successfully added Customer")
        navigate('/');
        window.location.reload();
    })
}
////////////////////////////////////////
const Navigate = useNavigate();
    const[selectedLink, setSelectedLink] = useState("Home");

    const handleLinkClick = (link)=>{
        setSelectedLink(link);
       // Navigate(`/${link}`)
    };

    useEffect(()=>{
        setSelectedLink('Home')
    },[]);

    const renderComponent = ()=>{
        switch(selectedLink){
            case "aboutus": 
               return <AboutUs/>
            case "login":
                 return <Login/>
            case "ContactUs":
                 return <ContactUs/>
            case "regsp":
                 return <RegiStrationS/>
            case "regcus":
                 return <RegiStration1/>
            default:
              return null;
        }
    }
    
  //const mystate = useSelector(state=>state.logged)

    return(
      // <div>
      //   <div>
      //       {renderComponent()}
      //   </div>
      //         <div container mt-3>
      //         <div>
      //         <header >
      //         <div>
      //           <Navbar bg="dark" variant="dark" expand="lg"  >
      //             <Container>
      //               <Navbar.Brand href="/">Home Glove Cleaning Services</Navbar.Brand>
      //               <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //               <Navbar.Collapse id="basic-navbar-nav">
      //                 <Nav className="ml-auto">
      //                   <Nav.Link  onClick={()=>{handleLinkClick('aboutus')}}>About Us</Nav.Link>
      //                   <Nav.Link onClick={()=>{handleLinkClick('ContactUs')}}>Contact Us</Nav.Link>
      //                   <Nav.Link  onClick={() => handleLinkClick('login')}>  <i className='fas fa-user'></i> Log In</Nav.Link>
      //                   <NavDropdown
      //                     id="nav-dropdown-primary-example"
      //                     title="Register"
      //                     menuVariant="light">
      //                     {/* <NavDropdown.Item onClick={()=>{handleLinkClick('regsp')}}>Trekking club</NavDropdown.Item>
      //                     <NavDropdown.Item onClick={()=> {handleLinkClick('regcus')}}>Trekker</NavDropdown.Item> */}
      //                     <a href="/regcus"class="fw-bold text-body mx-2"><u>Customer</u></a><br/>
      //                           <a href="/regsp" class="fw-bold text-body mx-2"><u>Service Provider</u></a>
      //                   </NavDropdown>
      //                 </Nav>
      //               </Navbar.Collapse>
      //             </Container>
      //           </Navbar>
      //         </div>
      //       </header>
      //         </div>
      //         </div>
      <div>
        {/* // <section class="vh-100 bg-image" style="background-image: ${img};"> */}
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
                    <label class="form-label" for="form3Example1cg">Date Of Birth</label>
                        <input type="date" id="form3Example1cg" class="form-control form-control-md" name="dob" value={user.dob.value}
                onChange={(e)=>{handleChange("dob",e.target.value)}}/>
                        <div className="text-danger" style={{ display: (!user.dob.valid)  ?"block":"none"}}>
                {user.dob.error}
            </div>
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
                        <label class="form-label" for="form3Example4cg">Confirm Password</label>    {loginData.formValid }  {!validateData.valid }
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
      {/* <Footer/> */}
      </div>
    )
    }
