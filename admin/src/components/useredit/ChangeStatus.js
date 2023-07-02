import React from "react";

function ChangeStatus() {
  return (
    <div>
      <div className="m-5 w-full  gap-4">
        <select className="select select-bordered w-full max-w-xs mr-2">
          <option disabled selected>
            Pending
          </option>
          <option>Accepted</option>
          <option>Rejected</option>
        </select>
        <button className="btn btn-primary my-5">Update</button>
      </div>
    </div>
  );
}

export default ChangeStatus;
