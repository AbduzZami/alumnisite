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
        baseURL: "http://localhost:8800",
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
          <table className="table-auto w-full ">
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
          </table>
        </section>
      </div>
    </div>
  );
}

export default MyPosts;
