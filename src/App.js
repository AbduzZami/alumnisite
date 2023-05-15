import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import NewsEvents from "./pages/NewsEvents";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Navbar from "./components/Navbar";
import NewsEventDetails from "./pages/NewsEventDetails";
import Error from "./pages/Error";
import PostNews from "./pages/PostNews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/newsevents" element={<NewsEvents />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/newsevents/:id" element={<NewsEventDetails />} />
        <Route path="/newsevents/post" element={<PostNews />} />
      </Routes>
    </div>
  );
}

export default App;
