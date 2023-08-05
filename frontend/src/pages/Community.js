import React from "react";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Community() {
  const [alumnies, setAlumnies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      // No search query, show all alumni
      setIsLoading(true);
      try {
        axios({
          method: "get",
          url: `/users`,
          baseURL: "https://alumni-backend-lavs.onrender.com/",
          withCredentials: true,
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(res.data.data);
            setAlumnies(res.data.data);
          } else {
            setAlumnies([]);
          }
          setIsLoading(false);
        });
      } catch (error) {
        setAlumnies([]);
        setIsLoading(false);
        console.error(error);
      }
      return;
    }

    const fetchAlumni = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://alumni-backend-lavs.onrender.com//users/search",
          {
            params: {
              parameter: searchQuery,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          setAlumnies(response.data.data);
        } else {
          setAlumnies([]);
        }
        setIsLoading(false);
      } catch (error) {
        setAlumnies([]);
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchAlumni();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchQuery(formData.get("searchfor"));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mb-5">
        <form onSubmit={handleSearch}>
          <div className="flex flex-wrap gap-4 m-5 justify-center">
            <input
              type="text"
              name="searchfor"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn">
              Search
            </button>
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
        {!isLoading ? (
          <div className="flex flex-wrap gap-4">
            {
              // if alumnies is not empty or null
              alumnies.length > 0 ? (
                alumnies.map((alumni) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
                    <CommunityCard user={alumni} />
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
