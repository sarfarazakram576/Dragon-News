import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthIntegration/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Register = () => {
  const { createUser, updateUserProfile, logOutUser } = use(AuthContext);
  const navigate =useNavigate()
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;
    setNameError("");
    setPasswordError("");
    setCheckboxError("");
    if (name.length < 6) {
      return setNameError("Name should have 6 charecters");
    }
    const lowercasePassEx = /(?=.*[a-z])/;
    const uppercasePassEx = /(?=.*[A-Z])/;
    const digitPassEx = /(?=.*\d)/;
    const lengthPassEx = /.{6,}/;

    if (!lowercasePassEx.test(password)) {
      return setPasswordError(
        "password should have at least one lowercase charecter"
      );
    } else if (!uppercasePassEx.test(password)) {
      return setPasswordError(
        "password should have at least one uppercase charecter"
      );
    } else if (!digitPassEx.test(password)) {
      return setPasswordError("password should have at least one number");
    } else if (!lengthPassEx.test(password)) {
      return setPasswordError("password should have 6 charecters on longer");
    }

    if (checked) {
      createUser(email, password)
        .then((result) => {
          alert("A verification email sent");
          sendEmailVerification(auth.currentUser);
           updateUserProfile(name, photo);
          if(!result.emailVerified){
            logOutUser()
          }
          navigate('/auth/login')
        })
        .catch((error) => console.log(error));
    } else {
      return setCheckboxError("Accept our terms and conditions");
    }
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl mb-4 font-bold border-b-[1.5px] text-center border-gray-200 pb-6">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="font-bold primary text-[15px] label">
            Your Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="input mb-4 bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your name"
          />
          {nameError && (
            <p className="mb-2 text-red-500 font-semibold">{nameError}</p>
          )}

          <label className="font-bold primary text-[15px] label">
            Photo URL
          </label>
          <input
            required
            type="text"
            name="photo"
            className="input mb-4 bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your photo URL"
          />
          <label className="font-bold primary text-[15px] label">
            Email address
          </label>
          <input
            required
            type="email"
            name="email"
            className="input mb-4 bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your email address"
          />
          <label className="font-bold primary text-[15px] label">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            className="input bg-base-200 text-[12px] mb-4 placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your password"
          />
          {passwordError && (
            <p className="mb-2 text-red-500 font-semibold">{passwordError}</p>
          )}

          <label className="label mb-4">
            <input type="checkbox" name="checkbox" className="checkbox" />
            Accept terms and conditions
          </label>
          {checkboxError && (
            <p className="mb-2 text-red-500 font-semibold">{checkboxError}</p>
          )}

          <button className="btn btn-primary mt-2 text-white">Register</button>
        </form>
        <p className="text-[12px] text-center mt-4">
          Already Have An Account ?{" "}
          <Link
            to="/auth/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
