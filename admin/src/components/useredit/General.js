import React from "react";
import { useState } from "react";
import axios from "axios";
import SideBar from "../sidebar";
import Navbar from "../Navbar";

function General(props) {
  const [name, setName] = useState(props.user.user.user_name);
  const [roll_no, setRoll] = useState(props.user.user.roll_no);
  const [headline, setHeadline] = useState(props.user.user.headline);
  async function handleUpdateName() {
    try {
      await axios({
        method: "patch",
        url: "/admin/edituser",
        baseURL: "http://localhost:8800",
        data: {
          user_name: name,
          user_id: props.user.user.user_id,
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
        url: "/admin/edituser",
        baseURL: "http://localhost:8800",
        data: {
          roll_no: roll_no,
          user_id: props.user.user.user_id,
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
        url: "/admin/set_headline",
        baseURL: "http://localhost:8800",
        data: {
          headline: headline,
          user_id: props.user.user.user_id,
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
      <div className="flex flex-wrap">
        <div className="ml-10">
          <div className="">
            <h3 className="font-bold text-lg m-1 mt-10">Update Name</h3>
            <div className="py-4 m-1 flex flex-wrap">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                value={name}
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
                value={roll_no}
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

export default General;
