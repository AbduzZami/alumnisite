import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicView from "./authprofilecomps/PublicView";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import SideBar from "./sidebar";

function AuthProfile() {
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [roll_no, setRollNo] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [start_year, setStartYear] = useState("");
  const [end_year, setEndYear] = useState("");

  console.log(name);

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

  async function handleAddWork() {
    try {
      await axios({
        method: "post",
        url: "/edit_profile/add_work",
        baseURL: "http://localhost:8800",
        data: {
          company: company,
          designation: designation,
          start_year: start_year,
          end_year: end_year,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateWork() {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/add_work",
        baseURL: "http://localhost:8800",
        data: {
          work_id: 1,
          company: company,
          designation: designation,
          start_year: start_year,
          end_year: end_year,
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
    <div className="">
      <Navbar />
      <div className="flex flex-wrap">
        <SideBar />
        <div>
          <div className="container mx-auto my-10">
            <div className="flex flex-col-reverse md:flex-row mx-5">
              <div className="md:w-4/6 mr-10">
                <section>
                  <p className="font-bold text-2xl">{currentUser.user_name}</p>
                  <p className="text-lg">{currentUser.roll_no}</p>
                </section>

                <section className="mt-5">
                  <p className="font-bold">Work</p>
                  <hr className="h-px bg-black border-0" />
                  <div className="my-2">
                    <p>Founder & CEO</p>
                    <p>Niharon Technologies</p>
                    <p>2019 - Present</p>
                  </div>
                  <div className="my-2">
                    <p>Founder & CEO</p>
                    <p>Niharon Technologies</p>
                    <p>2019 - Present</p>
                  </div>
                  <div className="my-2">
                    <p>Founder & CEO</p>
                    <p>Niharon Technologies</p>
                    <p>2019 - Present</p>
                  </div>
                </section>

                <section className="mt-5">
                  <p className="font-bold">Education</p>
                  <hr className="h-px bg-black border-0" />
                  <div className="my-2">
                    <p>BSc in Computer Science & Engineering</p>
                    <p>Rajshahi University of Engineering & Technology</p>
                    <p>2019 - Present</p>
                  </div>
                  <div className="my-2">
                    <p>BSc in Computer Science & Engineering</p>
                    <p>Rajshahi University of Engineering & Technology</p>
                    <p>2019 - Present</p>
                  </div>
                  <div className="my-2">
                    <p>BSc in Computer Science & Engineering</p>
                    <p>Rajshahi University of Engineering & Technology</p>
                    <p>2019 - Present</p>
                  </div>
                </section>

                <section className="mt-5">
                  <p className="font-bold">Contact</p>
                  <hr className="h-px bg-black border-0" />
                  <div className="my-2">
                    <p>Phone</p>
                    <p>+8801521704287</p>
                  </div>
                  <div className="my-2">
                    <p>Email</p>
                    <a href="mailto:abduz.zami@gmail.com">
                      abduz.zami@gmail.com
                    </a>
                  </div>
                  <div className="my-2">
                    <p>Website</p>
                    <a href="https://niharon.com/abduzzami">
                      https://niharon.com/abduzzami
                    </a>
                  </div>
                </section>
              </div>
              <div className="md:w-2/6 mt-5 mb-5">
                <div className="sticky top-10">
                  <div className="avatar">
                    <div className="w-48 rounded">
                      <img src="https://avatars.githubusercontent.com/u/69592754?v=4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthProfile;
