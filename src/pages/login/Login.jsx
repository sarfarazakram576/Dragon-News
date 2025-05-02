import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthIntegration/AuthContext";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const { signInUser, logOutUser, resetPassword } = use(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          alert("Please verify your email first");
          logOutUser();
          return;
        } else {
          navigate(location.state || "/");
        }
      })
      .catch((error) => setError(error.code));
  };
  const handleForgotPassword = () => {
    if (emailRef.current.value) {
      resetPassword(emailRef.current.value);
      alert("A password reset email sent");
      return;
    } else {
      alert("Enter your Email");
      return;
    }
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl text-center mb-4 font-bold border-b-[1.5px] border-gray-200 pb-6">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="font-bold primary text-[15px] label">
            Email address
          </label>
          <input
            required
            ref={emailRef}
            name="email"
            type="email"
            className="input mb-4 bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your email address"
          />
          <label className="font-bold primary text-[15px] label">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            className="input bg-base-200 text-[12px] placeholder:text-[12px] placeholder:font-semibold placeholder:text-[#9F9F9F]"
            placeholder="Enter your password"
          />
          <div onClick={handleForgotPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>
          {error && <p className="mt-3 text-red-500 font-semibold">{error}</p>}
          <button className="btn btn-primary mt-6 text-white">Login</button>
        </form>
        <p className="text-[12px] text-center mt-4">
          Don't Have An Account ?{" "}
          <Link
            to="/auth/register"
            className="text-orange-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
