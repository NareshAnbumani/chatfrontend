import React, { useState } from "react";
import registerimage from "../../assets/images/register.svg";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={registerimage} alt="Login" />
          </div>

          <div id="form-section">
            <h2>Welcome back</h2>

            <form>
              <div className="input-field mb-1">
                <input
                  required="required"
                  type="text"
                  placeholder="Firstname"
                />
              </div>

              <div className="input-field mb-1">
                <input required="required" type="text" placeholder="Lastname" />
              </div>
              <div className="input-field mb-1">
                <input required="required" type="text" placeholder="email" />
              </div>
              <div className="input-field mb-1">
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="input-field mb-1">
                <input
                  required="required"
                  type="password"
                  placeholder="password"
                />
              </div>
              <button>Register</button>
            </form>

            <p>Already have a account?<Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
