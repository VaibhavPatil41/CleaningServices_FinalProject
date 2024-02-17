import { Component, useState } from "react"
// import img from "../Component/re"

export default function  UserLogin(){
    
  const Login = () => {
    const [formData, setFormData] = useState({ uname: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      
      setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { uname, password } = formData;
      let errors = {};

      // Simple email validation
    if (!uname) {
      errors.uname = 'User Name is required';
    }

   
    if (!password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    // Redirect or show logged in content
    return <p>Welcome! You are logged in.</p>;
  }


    return(
        // <section class="vh-100 bg-image" style="background-image: ${img};">
        <section class="vh-100 bg-image" >
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" >
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Login</h2>
      
                    <form onSubmit={handleSubmit}>
      
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">Enter User Name</label>
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" name="uname" value={formData.uname}
                            onChange={handleChange}/>
                         {errors.uname && <span style={{ color: 'red' }}>{errors.uname}</span>}
                      </div>
      
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">Enter password</label>
                        <input type="password" id="form3Example4cdg" class="form-control form-control-lg" name="password"
                          value={formData.password} onChange={handleChange} />
                          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                      </div>
      
                           
                      <div class="d-flex justify-content-center">
                        <button type="button" class="btn  btn-outline-info btn-block btn-lg gradient-custom-4 text-body">Login</button>
                      </div>
      
                      <p class="text-center text-muted mt-5 mb-0">New User?<a href="#!"
                          class="fw-bold text-body"><u>SignUp Here</u></a></p>
      
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
} 