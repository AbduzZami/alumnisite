import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import NormProfile from "../components/NormProfile";
import AuthProfile from "../components/AuthProfile";

function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      {currentUser ? <AuthProfile /> : <NormProfile />}
      <div />
      <Footer />
    </div>
  );
}

export default Profile;
