import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Community() {
  const [alumnies, setAlumnies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: "/users",
        baseURL: "http://localhost:8800",
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setAlumnies(res.data.data);
        } else {
          setAlumnies([]);
        }
        setIsLoading(true);
      });
    } catch (error) {
      setAlumnies([]);
      setIsLoading(true);
      console.error(error);
    }
  }, []);

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

        {/* check if is loading */}
        {isLoading ? (
          <div className="flex flex-wrap gap-4">
            {
              // if alumnies is not empty or null
              alumnies.length > 0 ? (
                alumnies.map((alumni) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
                    <CommunityCard
                      key={alumni.user_id}
                      name={alumni.user_name}
                      roll_no={alumni.roll_no}
                      headline={alumni.headline}
                      verification_status={alumni.verification_status}
                    />
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl">No Alumni Found</h1>
                </div>
              )
            }
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl">Loading...</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Community;
