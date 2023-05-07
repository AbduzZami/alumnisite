import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import teslaData from "../data/teslaData.json";
import Navbar from "../components/Navbar";

function Home() {
  // const [status, setState] = React.useState(false);
  // const [text, setText] = React.useState("");
  console.log(teslaData);
  return (
    <>
      <Navbar />
      <div className="home_container">
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

        {/* carousel */}
        <div className="carousel w-full h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/OIP.f1eE_Qgn9M9zCqnuZBo9-gHaEK?pid=ImgDet&rs=1"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/R.2c66148a9c29d90d4f08dd0575c40256?rik=sj%2fbYYC7Hv3qrw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fzNbNzrh.jpg&ehk=ME67J35w%2bWCnHYELZ3TEQ2uJwRMzUhfQmerk%2f34GQ5Q%3d&risl=&pid=ImgRaw&r=0"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/OIP.f1eE_Qgn9M9zCqnuZBo9-gHaEK?pid=ImgDet&rs=1"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://th.bing.com/th/id/R.2c66148a9c29d90d4f08dd0575c40256?rik=sj%2fbYYC7Hv3qrw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fzNbNzrh.jpg&ehk=ME67J35w%2bWCnHYELZ3TEQ2uJwRMzUhfQmerk%2f34GQ5Q%3d&risl=&pid=ImgRaw&r=0"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* carousel end */}

        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ...">01</div>
          <div class="row-span-2 ...">02</div>
        </div>
      </div>
    </>
  );
}

export default Home;
