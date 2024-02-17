import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { login } from "../loggedSlice";

import { Component } from "react"
// import img from "../Component/re"

export default function  Login(){
    
    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.logged)

    //Need to add database crosscheck login credentials 

    let navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(login());
        navigate('/home')
    }

    return(
        // <section class="vh-100 bg-image" style="background-image: ${img};">
        <section class="vh-100 bg-image" >
          <p> Logged in : {mystate.loggedIn.toString()} </p>

        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" >
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
      
                    <form>
      
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter User Name</label>
                      </div>
      
                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                      </div>
      
                           
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body"
                            onClick={handleClick}
                          >Login</button>
                      </div>
      
                      <p class="text-center text-muted mt-5 mb-0">New here?<a href="/reg"
                          class="fw-bold text-body mx-2"><u>Customer</u></a>
                          <a href="/regs"
                          class="fw-bold text-body mx-2"><u>Service Provider</u></a>
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