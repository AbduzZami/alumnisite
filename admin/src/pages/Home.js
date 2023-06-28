import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import teslaData from "../data/teslaData.json";

import NewsCard from "../components/NewsCard";
import TheLatestCard from "../components/TheLatestCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  // const [status, setState] = React.useState(false);
  return (
    <div>
      <Navbar />
      <div>Welcome to Admin Panel</div>
      <Footer />
    </div>
  );
}

export default Home;
