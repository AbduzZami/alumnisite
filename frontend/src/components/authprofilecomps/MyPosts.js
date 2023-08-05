import React, { useState } from "react";
import SideBar from "./sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";

function MyPosts() {
  const [posts, setPosts] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser.user_id);
    try {
      axios({
        method: "get",
        url: `/posts/my`,
        baseURL: "https://alumni-backend-lavs.onrender.com/",
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setPosts(res.data.data);
        } else {
          setPosts(null);
        }
        setIsLoading(false);
      });
    } catch (error) {
      setPosts([]);
      setIsLoading(true);
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <SideBar />

        <section className="m-5 w-3/5">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">My Posts</p>

            <div>
              <a href="/newsevents/createpost" className="font-bold">
                [Add New Post]
              </a>
            </div>
          </div>
          <hr className="h-px bg-black border-0" />
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Headline</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Status</th>
                {/* <th className="px-4 py-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {isLoading === false && posts !== null && posts !== undefined ? (
                posts.map((post, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">
                      <img
                        src={`https://alumni-backend-lavs.onrender.com/${post.image_url}`}
                        alt="post"
                        className="w-10 h-10 object-cover m-2 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2">{post.title}</td>
                    <td className="px-4 py-2">{post.created_on}</td>
                    <td className="px-4 py-2">{post.status}</td>
                    {/* <td className="px-4 py-2">Edit</td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2">No Posts</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default MyPosts;
