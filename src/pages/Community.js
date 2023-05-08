import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";

function Community() {
  return (
    <div>
      <div className="container mx-auto mb-5">
        <div className="flex flex-wrap gap-4 m-5 justify-center">
          {/* select start */}
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          {/* select end */}

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <button className="btn">Search</button>
        </div>
        <hr
          style={{
            background: "black",
            // color: "black",
            // borderColor: "lime",
            height: "1px",
            margin: "5px",
          }}
        />
        <div className="flex flex-wrap gap-4">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;
