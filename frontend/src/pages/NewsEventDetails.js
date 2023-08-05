import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewsEventDetails() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { post_id } = useParams();

  useEffect(() => {
    setIsLoading(true); // Set loading to true before making the Axios request.
    axios
      .get(`https://alumni-backend-lavs.onrender.com/post`, {
        params: {
          post_id: post_id,
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
        setIsLoading(false); // Set loading to false after handling the response.
      })
      .catch((error) => {
        setPost(null);
        setIsLoading(false); // Set loading to false in case of an error.
        console.error(error);
      });
  }, [post_id]);
  return (
    <div>
      <Navbar />
      <section>
        {!isLoading ? (
          post != null ? (
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div class="max-w-3xl">
                <h2 class="text-3xl font-bold sm:text-4xl">{post.title}</h2>
              </div>

              <div className="mt-2 flex flex-wrap">
                <p>
                  {Intl.DateTimeFormat("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(post.created_on))}
                </p>
                <p className="mx-2">|</p>
                <p>{post.user_name}</p>
              </div>

              <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                  <img
                    alt="Party"
                    src={`https://alumni-backend-lavs.onrender.com/${post.image_url}`}
                    class="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div class="lg:py-16">
                  <article class="space-y-4 text-gray-600">
                    <p>{post.description}</p>
                  </article>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <h1 className="text-2xl">No Post Found</h1>
            </div>
          )
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">Loading</h1>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default NewsEventDetails;
