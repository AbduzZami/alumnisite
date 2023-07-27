import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Posts() {
  const { currentUser } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "/posts",
        baseURL: "http://localhost:8800",
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setPosts(res.data.data);
        } else {
          setPosts([]);
        }
        setIsLoading(true);
      });
    } catch (error) {
      setPosts([]);
      setIsLoading(true);
      console.error(error);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        <SideBar />

        <section className="m-5 w-3/5">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">Posts</p>

            <div>
              <Link to="/addpost" className="font-bold">
                [Add New Post]
              </Link>
            </div>
          </div>
          <hr className="h-px bg-black border-0" />
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Image
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Headline
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Description
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Time
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
                  posts.length > 0 ? (
                    posts.map((post) => (
                      <tr key={post.id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <img
                            src={`http://localhost:8800/${post.image_url}`}
                            alt={post.title}
                            className="w-10 h-10 rounded-md"
                          />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.title}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.description.substring(0, 50)}...
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.created_on}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.status}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          <Link to={`/posts/${post.post_id}`}>
                            <button>Edit</button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        No posts available.
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Posts;
