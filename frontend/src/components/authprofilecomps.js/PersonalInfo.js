import React from "react";
import { useState } from "react";
import axios from "axios";
import SideBar from "./sidebar";
import Navbar from "../Navbar";

function PersonalInformation() {
  const [name, setName] = useState("");
  const [roll_no, setRoll] = useState("");
  const [headline, setHeadline] = useState("");
  async function handleUpdateName() {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_name",
        baseURL: "http://localhost:8800",
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
        baseURL: "http://localhost:8800",
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
        baseURL: "http://localhost:8800",
        data: {
          headline: headline,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
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
            <h3 className="font-bold text-lg m-1 mt-10">Update Roll</h3>
            <div className="py-4 m-1 flex flex-wrap">
              <input
                onChange={(e) => {
                  setRoll(e.target.value);
                }}
                type="text"
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
