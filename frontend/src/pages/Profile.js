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
        url: "/users",
        baseURL: "http://localhost:8800",
        data: {
          user_id: id,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUserData(res.data.data);
        } else {
          setUserData(null);
        }
        setIsLoading(true);
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
      {isLoading ? (
        currentUser.user_id === parseInt(id) ? (
          <AuthProfile user_data={userData[0]} />
        ) : (
          <NormProfile user_data={userData[0]} />
        )
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
        </div>
      )}
      <div />
      <Footer />
    </div>
  );
}

export default Profile;
