import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl text-center mb-4 font-bold border-b-[1.5px] border-gray-200 pb-6">Login your account</h1>
        <form className="fieldset">
          <label className="font-bold primary text-[15px] label">
            Email address
          </label>
          <input
            type="email"
            className="input mb-4 bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your email address"
          />
          <label className="font-bold primary text-[15px] label">
            Password
          </label>
          <input
            type="password"
            className="input bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your password"
          />
          <button className="btn btn-primary mt-6 text-white">Login</button>
        </form>
        <p className="text-[12px] text-center mt-4">
          Don't Have An Account ?{" "}
          <Link to="/auth/register" className="text-orange-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
