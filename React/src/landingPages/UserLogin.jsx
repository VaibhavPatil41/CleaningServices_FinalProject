import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";

// import validator from 'validator';

const UserLoginSMT = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: { value: "", valid: false, touched: false, error: "" },
    password: { value: "", valid: false, touched: false, error: "" },
  });

  const validateData = (key, val) => {
    let valid = false;
    let error = "";

    switch (key) {
      // case "password":
      //   if (validator.isStrongPassword(val, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
      //     valid = true;
      //   } else {
      //     error = "Password must be strong";
      //   }
      //   break;
      case "username":
        if (!val.trim()) {
          error = "Please enter username";
        } else if (!/^[A-Za-z]+$/.test(val.trim())) {
          error = "Please enter valid username";
        } else {
          valid = true;
        }
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleChange = (name, value) => {
    const { valid, error } = validateData(name, value);

    setLoginData(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        valid,
        error,
        touched: true
      }
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: loginData.username.value,
        password: loginData.password.value
      })
    };

    fetch("http://localhost:8080/login", options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("service error");
        }
      })
      .then((data) => {
        console.log(data);
        if (data === 1 || data === 2 || data === 3) {
          navigate("/Admin"); // Or navigate to appropriate route based on data
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        navigate("/serverError");
      });
  };

  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-secondary">
        <div className="form_container p-5 rounded bg-white">
          <form>
            <h3 className="text-center">Sign In</h3>
            <div className="col mb-3">
              <label htmlFor="Username">Enter Username:</label>
              <input
                type="text"
                name="username"
                id="Username"
                placeholder="eg. Supriya"
                className="form-control"
                value={loginData.username.value}
                onChange={(e) => handleChange("username", e.target.value)}
                onBlur={(e) => handleChange("username", e.target.value)}
              />
              {loginData.username.error && <span className="text-danger">{loginData.username.error}</span>}
            </div>
            <div className="col mb-3">
              <label htmlFor="Password">Enter Password:</label>
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="eg. Supriya@123"
                className="form-control"
                value={loginData.password.value}
                onChange={(e) => handleChange("password", e.target.value)}
                onBlur={(e) => handleChange("password", e.target.value)}
              />
              {loginData.password.error && <span className="text-danger">{loginData.password.error}</span>}
            </div>
            <div className="d-grid">
              <input
                type="submit"
                value="Login"
                className="btn btn-success"
                onClick={(e) => handleLogin(e)}
              />
            </div>
            <div className="signup">
              <span className="signup">Don't have an Account?
                <Link to="/UserRegistration"> Signup</Link>
              </span>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-start mt-2">
                <button className="btn btn-primary" onClick={()=>{navigate("/")}}>BACK</button>
                </p>
              </div>
              <div className="col">
                <p className="text-end mt-2">
                  <Link to="/forgot">Forgot Password</Link> ?
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
     <Footer/>
    </>
  );
};//validator

export default UserLoginSMT;
