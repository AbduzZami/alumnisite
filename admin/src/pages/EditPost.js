import React from "react";
import SideBar from "../components/sidebar";

function EditPost() {
  return (
    <div className="flex flex-wrap">
      <SideBar />
      <div className="flex flex-wrap w-full md:w-1/2 lg:w-3/4">
        <div className="m-5 w-full lg:w-4/6 gap-4">
          <div className="text-sm breadcrumbs mb-10">
            <ul>
              <li>
                <a href="/posts">Posts</a>
              </li>
              <li>0</li>
            </ul>
          </div>
          <img
            src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1d04au.img?w=800&h=415&q=60&m=2&f=jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <div className="m-5 w-full md:w-1/3 lg:w-1/6 gap-4">
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
    </div>
  );
}

export default EditPost;
