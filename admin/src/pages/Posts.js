import React, { useState } from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log(currentUser.user_id);
  //   try {
  //     axios({
  //       method: "get",
  //       url: `/posts/my`,
  //       baseURL: "http://localhost:8800",
  //       withCredentials: true,
  //     }).then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         console.log(res.data.data);
  //         setPosts(res.data.data);
  //       } else {
  //         setPosts(null);
  //       }
  //       setIsLoading(false);
  //     });
  //   } catch (error) {
  //     setPosts([]);
  //     setIsLoading(true);
  //     console.error(error);
  //   }
  // }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        <SideBar />

        <section className="m-5 w-3/5">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">Posts</p>

            <div>
              <a href="/newsevents/createpost" className="font-bold">
                [Add New Post]
              </a>
            </div>
          </div>
          <hr className="h-px bg-black border-0" />
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead class="ltr:text-left rtl:text-right">
                <tr>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Created On
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Link className="" to="/posts/1">
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

                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    <div className="">
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
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    <div className="flex flex-wrap">
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <table className="table-auto w-full ">
            <thead>
              <tr className="">
                <th>Image</th>
                <th>Headline</th>
                <th>Description</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                // if alumnies is not empty or null
                isLoading === false && posts !== null && posts !== undefined ? (
                  posts.map((post) => (
                    <tr>
                      <td>shsdfjsfdkjnk</td>
                      <td>fsfsdsdffd</td>
                      <td>fsfdsdffsfdsxddd</td>
                      <td>454545</td>
                      <td>Edit</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>shsdfjsfdkjnk</td>
                    <td>fsfsdsdffd</td>
                    <td>fsfdsdffsfdsxddd</td>
                    <td>454545</td>
                    <td>Edit</td>
                  </tr>
                )
              }{" "}
            </tbody>
          </table> */}
        </section>
      </div>
    </div>
  );
}

export default Posts;
