import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import teslaData from "../data/teslaData.json";

import NewsCard from "../components/NewsCard";
import TheLatestCard from "../components/TheLatestCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  // const [status, setState] = React.useState(false);
  // const [text, setText] = React.useState("");
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "/posts",
        baseURL: "http://localhost:8800",
        params: {
          limit: 5,
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
    <div>
      <Navbar />
      <div className="container mx-auto">
        {/* 
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {teslaData.map((data) => (
          <Marker
            key={data.id}
            position={[data.gps.latitude, data.gps.longitude]}
          >
            <Popup>
              <h2>{data.name}</h2>
              <p>{data.address.street}</p>
            </Popup>
          </Marker>
        ))}
        </MapContainer> */}

        {/* welcome */}
        <section>
          <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="House"
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div class=" flex items-center bg-gray-100">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div class="p-8 sm:p-16 lg:p-24">
                  <h2 class="text-2xl font-bold sm:text-3xl">
                    Welcome to RUET alumni association
                  </h2>

                  <p class="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <button class="mt-8 btn btn-neutral">Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* welcome end */}

        <div class="grid grid-flow-row-dense grid-cols-3 ...">
          <div class="col-span-3 md:col-span-1 m-2 ">
            <p className="text-lg font-bold">Top News</p>
            <hr
              style={{
                background: "black",
                // color: "black",
                // borderColor: "lime",
                height: "1px",
                margin: "5px",
              }}
            />

            {isLoaded ? (
              <div className="">
                {
                  // if alumnies is not empty or null
                  posts.length > 0 ? (
                    posts.slice(1, 5).map((post) => (
                      <div className="w-96">
                        <NewsCard key={post.post_id} post={post} />
                      </div>

                      // <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
                      //   <NewsCardLarge key={post.post_id} post={post} />
                      // </div>
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

            <div className="m-2">
              <Link to={"/newsevents"}>
                <button className="btn btn-block btn-outline">See More</button>
              </Link>
            </div>
          </div>
          <div class="col-span-3 md:col-span-2 m-2">
            <p className="text-lg font-bold">The Latest</p>
            <hr
              style={{
                background: "black",
                // color: "black",
                // borderColor: "lime",
                height: "1px",
                margin: "5px",
              }}
            />

            {isLoaded ? (
              <TheLatestCard post={posts[0]} />
            ) : (
              <div className="flex justify-center items-center">
                <h1 className="text-2xl">Loading...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
