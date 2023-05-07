import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {
  let persons = [
    {
      name: "John",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Modu",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Arif",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "John",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Modu",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Arif",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "John",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Modu",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
    {
      name: "Arif",
      batch: "19",
      dept: "CSE",
      work: "Bugijugi",
      location: {
        latitude: 23.56,
        longitude: 90.91,
        address: "51 Abduz Zami Street",
      },
      email: "abzm",
      phone: "00000",
      linkedin: "aaa",
      facebook: "aafdd",
      twitter: "sadada",
    },
  ];
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">RUETians</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-outline m-1">SIGN IN</button>
          <button className="btn m-1">SIGN UP</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
