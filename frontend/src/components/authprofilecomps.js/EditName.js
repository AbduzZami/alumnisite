import React from "react";
import { useState } from "react";
import axios from "axios";
import SideBar from "./sidebar";

function EditName() {
  const [name, setName] = useState("");
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

  return (
    <div className="flex flex-wrap">
      <SideBar />
      <div className="ml-10">
        <form className="">
          <h3 className="font-bold text-lg m-1 mt-20">Update Name</h3>
          <p className="py-4 m-1">
            <input
              onChange={(e) => {
                //   setName(e.target.value);
              }}
              type="text"
              className="w-80 input w-full input-bordered m-1"
              placeholder="Update Name"
            />
            <button onClick={handleUpdateName} className="btn btn-success m-1">
              Update
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default EditName;
