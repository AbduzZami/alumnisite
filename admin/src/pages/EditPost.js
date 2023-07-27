import React, { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null); // State to store post data

  useEffect(() => {
    axios
      .get(`http://localhost:8800/post`, {
        params: {
          post_id: id,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setPost(res.data.data);
        } else {
          setPost(null);
        }
      })
      .catch((error) => {
        setPost(null);
        console.error(error);
      });
  }, [id]);

  // Handle edit post function (similar to your code)
  async function handleEditPost(status) {
    try {
      const response = await axios.patch(
        "admin/set_post_status",
        {
          status: status,
          post_id: id,
        },
        {
          baseURL: "http://localhost:8800",
          withCredentials: true,
        }
      );
      console.log(response);
      // After updating the status, update the post data with the new status
      setPost({ ...post, status: status });
      toast(response.data.message);
    } catch (error) {
      console.error(error);
    }
  }

  // Render loading state while fetching data
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap">
      <SideBar />
      <div className="flex flex-wrap w-full md:w-1/2 lg:w-3/4">
        <div className="m-5 w-full lg:w-4/6 gap-4">
          <div className="text-sm breadcrumbs mb-10">
            <ul>
              <li>
                <a href="/posts">Posts</a>
              </li>
              <li>{post.id}</li>
            </ul>
          </div>
          <div className="my-5">
            <span className="  px-2 py-1 text-xs font-semibold text-green-800 bg-green-300 rounded">
              {post.status}
            </span>
          </div>
          <img
            src={`http://localhost:8800/${post.image_url}`}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="post"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
            <p className="py-6">{post.description}</p>
          </div>
        </div>
        <div className="m-5 w-full md:w-1/3 lg:w-1/6 flex flex-wrap gap-2">
          <button
            className="btn btn-primary my-5 bg-green-500"
            onClick={() => handleEditPost("approved")}
          >
            Approve
          </button>
          <button
            className="btn btn-primary my-5 bg-red-500"
            onClick={() => handleEditPost("rejected")}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
