import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [alumnies, setAlumnies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:8800/users");
        if (response.status === 200) {
          setAlumnies(response.data.data);
        } else {
          setAlumnies([]);
        }
        setIsLoading(false);
      } catch (error) {
        setAlumnies([]);
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchUsersData();
  }, []);

  return (
    <div className="flex flex-wrap">
      <SideBar />

      <section className="m-5 w-3/5">
        <div className="flex justify-between flex-wrap">
          <p className="font-bold">Users</p>

          <div>
            <Link to="/newsevents/createpost" className="font-bold">
              [Add New User]
            </Link>
          </div>
        </div>
        <hr className="h-px bg-black border-0" />

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              ) : alumnies.length === 0 ? (
                <tr>
                  <td colSpan="4">No users found.</td>
                </tr>
              ) : (
                alumnies.map((user) => (
                  <tr key={user.user_id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {user.user_name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.verification_status}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <Link className="" to={`/users/${user.user_id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Users;
