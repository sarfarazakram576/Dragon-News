import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../AuthIntegration/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to="/auth/login">Login</NavLink>
      </li>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to="/auth/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
          
            <p className="text-sm mr-2 font-semibold"> {user.displayName}</p>
            <img className="mr-2 w-12 h-12 rounded-full" src={user.photoURL} alt="" />
            <button
              onClick={handleLogOut}
              className="btn btn-primary px-6 mr-4 text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            {" "}
            <img
              className="mr-4 w-8"
              src="https://i.ibb.co.com/3m7NWRv9/user.png"
              alt=""
            />
            <Link to="/auth/login">
              {" "}
              <button className="btn btn-primary px-6 mr-4 text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
