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
      <div className="home_container">
        <Navbar />

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
        </MapContainer>
      </div>
    </>
  );
}

export default Home;
