import { Component } from "react"
// import img from "../Component/re"



export default function  RegiStration(){
    
    

    return(
        // <section class="vh-100 bg-image" style="background-image: ${img};">
        <section class="vh-100 bg-image" >
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
                        <select >
                            <option value="0">Select Role</option>
                            <option value="1">Customer</option>
                            <option value="2">Service Provider</option>
                        </select><br/>
                        
                    </div>

                    <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter Name</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="email" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter Email</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="number" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter Contact No</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="number" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter Adress</label>
                    </div>
                    <div class="form-outline mb-3">
                        <input type="date" id="form3Example1cg" class="form-control form-control-md" />
                        <label class="form-label" for="form3Example1cg">Date Of Birth</label>
                    </div>
      

                      <div class="form-outline mb-3">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Enter Username</label>
                      </div>
      
                      <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                      </div>
      
                      <div class="form-outline mb-3">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Confirm Password</label>
                      </div>
      
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>
      
                      <p class="text-center text-muted mt-5 mb-0">Have already an account? 
                            <a href="#!" class="fw-bold text-body"><u>Login here</u></a></p>
      
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