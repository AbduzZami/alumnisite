import React from "react";
import NewsCard from "../components/NewsCard";
import TheLatestCard from "../components/TheLatestCard";
import NewsCardLarge from "../components/NewsCardLarge";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NewsEvents() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "/posts",
        baseURL: "http://localhost:8800",
        params: {
          isapproved: true,
        },
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
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-5/6 lg:mr-20">
            <div className=" flex flex-wrap gap-4">
              {isLoading ? (
                <div className="flex flex-wrap gap-4">
                  {
                    // if alumnies is not empty or null
                    posts.length > 0 ? (
                      posts.map((post) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
                          <NewsCardLarge key={post.post_id} post={post} />
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl">No Post Found</h1>
                      </div>
                    )
                  }
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl">Loading...</h1>
                </div>
              )}
            </div>
            {/* <div className="m-2">
              <button className="btn btn-outline">Load More</button>
            </div> */}
          </div>
          <div className="md:w-1/6 mt-5 mb-5">
            <div className="sticky top-10">
              <Link to="/newsevents/createpost">
                <div class="group relative block h-64 sm:h-80 lg:h-96">
                  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 class="mt-4 text-xl font-medium sm:text-2xl">
                        Let us know what is happening there
                      </h2>
                    </div>

                    <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                        Post Someting
                      </h3>

                      <p class="mt-4 text-sm sm:text-base">
                        Let us know what is happening there
                      </p>

                      <p class="mt-8 font-bold">Reuqest Post</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div />
      <Footer />
    </>
  );
}

export default NewsEvents;
