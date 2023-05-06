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
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <input
                type="text"
                placeholder="Search the person you need"
                className="input input-bordered w-full mt-2 mb-2"
              />
              {persons.map((person) => (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2 mb-2"
                >
                  <div className="collapse-title text-xl font-medium">
                    {person.name}
                  </div>
                  <div className="collapse-content">
                    <p>{person.work}</p>
                  </div>
                </div>
              ))}
            </label>
          </label>
          {/* <button className="btn btn-ghost btn-circle" onClick={onSearchClick}>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
