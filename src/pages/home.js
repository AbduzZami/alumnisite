import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import teslaData from "../data/teslaData.json";

import NewsCard from "../components/NewsCard";
import TheLatestCard from "../components/TheLatestCard";
import Footer from "../components/Footer";

function Home() {
  // const [status, setState] = React.useState(false);
  // const [text, setText] = React.useState("");
  return (
    <>
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

              <div class="relative flex items-center bg-gray-100">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div class="p-8 sm:p-16 lg:p-24">
                  <h2 class="text-2xl font-bold sm:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore, debitis.
                  </h2>

                  <p class="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <a
                    href="#"
                    class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* welcome end */}

        <div class="grid grid-flow-row-dense grid-cols-3 ...">
          <div class="col-span-3 md:col-span-1 m-2">
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

            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />

            <div className="m-2">
              <button className="btn btn-block btn-outline">See More</button>
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
            <TheLatestCard />
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center">
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
