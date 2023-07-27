import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ChangeStatus(props) {
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);

  async function handleStatusChange(status) {
    // console.log("I am the ... ", props);
    try {
      await axios({
        method: "patch",
        url: "admin/changeuserstatus",
        baseURL: "http://localhost:8800",
        data: {
          verification_status: status,
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

  const handleStatusSelection = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdateClick = () => {
    handleStatusChange(selectedStatus);
  };

  useEffect(() => {
    setSelectedStatus(props.user.user.verification_status);
  }, []);

  return (
    <div>
      <div className="m-5 w-full gap-4">
        <select
          className="select select-bordered w-full max-w-xs mr-2"
          value={selectedStatus}
          onChange={handleStatusSelection}
        >
          <option value="unverified">Unverified</option>
          <option value="verified">Verified</option>
          <option value="banned">Banned</option>
        </select>
        <button className="btn btn-primary my-5" onClick={handleUpdateClick}>
          {isUpdating ? "Updating..." : "Update"}
        </button>
        {updateSuccess && <div className="text-green-500">{updateSuccess}</div>}
        {updateError && <div className="text-red-500">{updateError}</div>}
      </div>
    </div>
  );
}

export default ChangeStatus;
