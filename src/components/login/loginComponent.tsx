"use client";
import React, { useState } from "react";
import axios from "axios";

const LoginComponent = ({ route }: any) => {
  const LOGIN_API = "http://localhost:8081/api/v1/auth/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Send email and password to the backend API
    try {
      const response = await axios.post(LOGIN_API, {
        email,
        password,
      });

      const responseData = response.data;
      console.log({ responseData });

      console.log("userToken", responseData.data);
      localStorage.setItem("userToken", responseData.data);

      // Redirect to the dashboard page
      route.push("/dashboard");
    } catch (error) {
      // Handle login failure (e.g., show an error message)
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" data-bs-toggle="modal" data-bs-target="#loginModal">
        Login
      </button>
      <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Already a user, login
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
