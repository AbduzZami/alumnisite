import React from "react";
import { useState } from "react";
import axios from "axios";
import SideBar from "./sidebar";
import Navbar from "../Navbar";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function PersonalInformation() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [roll_no, setRoll] = useState("");
  const [headline, setHeadline] = useState("");

  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser.user_id);
    try {
      axios({
        method: "get",
        url: `/userbyid/${currentUser.user_id}`,
        baseURL: "https://alumni-backend-lavs.onrender.com",
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUserData(res.data.data);
          setName(res.data.data.user.user_name);
          setRoll(res.data.data.user.roll_no);
          setHeadline(res.data.data.user.headline);
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

  async function handleUpdateImage() {
    try {
      const formData = new FormData();
      formData.append("image", image);

      await axios({
        method: "post",
        url: "/edit_profile/set_image", // Assuming this is the correct API endpoint on the backend
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res);
        toast(res.data.message);
        // Handle success or any other operations after successful post
      });
    } catch (error) {
      console.error(error);
      toast(error.response.data.message);
      // Handle error or any other operations after unsuccessful post
    }
  }
  async function handleUpdateName() {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_name",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          user_name: name,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateRoll() {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_roll",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          roll_no: roll_no,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateHeadline() {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/set_headline",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          headline: headline,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        toast(res.data.message);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <SideBar />
        <div className="ml-10">
          <div className="">
            <h3 className="font-bold text-lg m-1 mt-10">Update Name</h3>
            <div className="py-4 m-1 flex flex-wrap">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                className="w-80 input input-bordered m-1"
                placeholder="Update Name"
              />
              <button
                onClick={handleUpdateName}
                className="btn btn-success m-1"
              >
                Update
              </button>
            </div>
          </div>

          <div className="">
            <h3 className="font-bold text-lg m-1 mt-10">Update Image</h3>
            <div className="py-4 m-1 flex flex-wrap">
              <div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <button
                onClick={handleUpdateImage}
                className="btn btn-success m-1"
              >
                Update
              </button>
            </div>
          </div>

          <div className="">
            <h3 className="font-bold text-lg m-1 mt-10">Update Roll</h3>
            <div className="py-4 m-1 flex flex-wrap">
              <input
                onChange={(e) => {
                  setRoll(e.target.value);
                }}
                type="text"
                value={roll_no}
                className="w-80 input input-bordered m-1"
                placeholder="Update Roll"
              />
              <button
                onClick={handleUpdateRoll}
                className="btn btn-success m-1"
              >
                Update
              </button>
            </div>
          </div>

          <div className="">
            <h3 className="font-bold text-lg m-1 mt-10">Update Headline</h3>
            <div className="py-4 m-1">
              <textarea
                onChange={(e) => {
                  setHeadline(e.target.value);
                }}
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Update Headline"
                value={headline}
                rows="8"
                id="description"
              ></textarea>
              <button
                onClick={handleUpdateHeadline}
                className="btn btn-success m-1"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
