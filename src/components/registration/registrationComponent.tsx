"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RegistrationComponent = () => {
  const REGISTRATION_API = "http://localhost:8081/api/v1/auth/register_pharmacist";
  let initialRegistrationDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialRegistrationDetails);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Send email and password to the backend API
    try {
      await axios.post(REGISTRATION_API, { ...userData });
      Swal.fire({
        title: "Success!",
        text: "Registration Successful, System Admin will review and process your data",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: `Something went wrong during your registration. ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again or Contact Admin!",
      });
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4" data-bs-toggle="modal" data-bs-target="#registrationModal">
        Register As Pharmacist
      </button>
      <div className="modal fade" id="registrationModal" aria-labelledby="registrationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registrationModalLabel">
                Register As A Pharmacist
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="First name" value={userData.firstName} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, firstName: e.target.value }))} />
                  <label htmlFor="floatingInput">firstName</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Last name" value={userData.lastName} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, lastName: e.target.value }))} />
                  <label htmlFor="floatingInput">lastName</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={userData.email} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, email: e.target.value }))} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number" value={userData.phoneNumber} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, phoneNumber: e.target.value }))} />
                  <label htmlFor="phoneNumber">Phone Number </label>
                </div>

                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={userData.password} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, password: e.target.value }))} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={userData.confirmPassword} onChange={(e) => setUserData((prevUserData) => ({ ...prevUserData, confirmPassword: e.target.value }))} />
                  <label htmlFor="floatingPassword">Confirm Password</label>
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

export default RegistrationComponent;
