import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div style={{zIndex:"10000"}} className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/community">Community</Link>
              </li>

              <li>
                <Link to="/newsevents">News & Events</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">RUETians</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>

            <li>
              <Link to="/newsevents">News & Events</Link>
            </li>
          </ul>
        </div>

        {
          // if user is logged in
          currentUser ? (
            <div className="navbar-end">
              <div style={{zIndex:"10000"}} className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="m-1 btn btn-ghost btn-md rounded-btn"
                >
                  <div className="avatar">
                    <div className="rounded-full w-10 h-10 m-1">
                      <img src="https://i.pravatar.cc/500?img=32" alt="img"/>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 "
                >
                  <li>
                    <Link to={`/editprofile`}>Profile</Link>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <Link className="" onClick={() => logout()}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <Link to={"/signin"}>
                <button className="btn btn-outline m-1">SIGN IN</button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn btn-outline m-1">SIGN UP</button>
              </Link>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Navbar;
