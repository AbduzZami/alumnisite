import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Community() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-5">
        <form action="#">
          <div className="flex flex-wrap gap-4 m-5 justify-center">
            {/* select start */}
            {/* <select className="select select-bordered w-full max-w-xs">
              <option disabled selected value="byname">
                Who shot first?
              </option>
              <option value="byroll">Han Solo</option>
              <option value="bywork">Greedo</option>
            </select> */}
            {/* select end */}

            <input
              type="text"
              name="searchfor"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <button className="btn">Search</button>
          </div>
        </form>
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
