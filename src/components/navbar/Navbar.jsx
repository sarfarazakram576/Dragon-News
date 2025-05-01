import React from "react";
import { Link, NavLink } from "react-router";
import './Navbar.css'

const Navbar = () => {
  const links = (
    <>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to="/login">
          Login
        </NavLink>
      </li>
      <li className="m-1 text-accent font-semibold">
        {" "}
        <NavLink to='/career'>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mt-4">
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
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="mr-4 w-8" src="https://media-hosting.imagekit.io/ea9429ae6aa7464d/user.png?Expires=1840644547&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fbFhBcdfCOST7zsQw2nRSjmwEJV3VLk5osaZLgLUN0lD4ep~AoV9gHGqqiM6PG57PAY2alunKce9BPJ-hrFA7ETslLilWMlNaqvI6RzIVEll2F-dt68-G1Mn3408GuzHU9Srx8CcXodeIUVHacMmxcOUcvCTeYFOTL2zuNYQos~At49PKdzdOhv~c~-gUyxFGzKRNllx1-~eHFpCxQfKEMR3dibylQv-T3tR~uHHU6RKP8dtSf-vqId704E1t6jdZCUKFOE53H-UNElDcrWGykm7OxFX42aZ-1e~qXfBZ5PjfIYUHJwq-SYick4wmhYYlU2SSGfYEkvchcQVd24SaA__" alt="" />
       <Link to='/login'> <button className="btn btn-primary px-6 mr-4 text-white">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
