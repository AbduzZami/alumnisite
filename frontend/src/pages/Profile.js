import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import NormProfile from "../components/NormProfile";
import AuthProfile from "../components/AuthProfile";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(id);
    console.log(currentUser.user_id);
    try {
      axios({
        method: "get",
        url: `/userbyid/${id}`,
        baseURL: "http://localhost:8800",
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUserData(res.data.data);
        } else {
          setUserData(null);
        }
        setIsLoading(false);
      });
    } catch (error) {
      setUserData([]);
      setIsLoading(true);
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <NormProfile user_data={userData} />
      <Footer />
    </div>
  );
}

export default Profile;
