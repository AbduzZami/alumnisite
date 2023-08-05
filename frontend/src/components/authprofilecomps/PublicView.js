import React, { useState } from "react";

import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import SideBar from "../authprofilecomps/sidebar";
import { useEffect } from "react";
import Navbar from "../Navbar";

function PublicView() {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `/userbyid/${currentUser.user_id}`,
        baseURL: "http://localhost:8800",
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUserData(res.data.data);
        } else {
          setUserData(null);
        }
        setIsLoading(false);
      });
    } catch (error) {
      setUserData([]);
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap container">
        <SideBar />
        {!isLoading ? (
          <div className=" my-10 w-4/5 md:w-3/5 lg:w-4/5">
            <div className="flex flex-col-reverse md:flex-row mx-5 ">
              <div className="bg-white shadow-md p-4 rounded-lg md:w-4/5 mr-10">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">
                    {userData.user.user_name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {userData.user.roll_no}
                  </p>
                </div>

                <section className="mb-6">
                  <h3 className="font-bold text-xl">Work</h3>
                  <hr className="my-2" />
                  {userData.works.map((work, index) => (
                    <div key={index} className="my-2">
                      <p>{work.designation}</p>
                      <p className="text-gray-600">{work.company}</p>
                      <p className="text-gray-600">
                        {work.start_year} - {work.end_year}
                      </p>
                      <p className="text-gray-600">{work.location}</p>
                    </div>
                  ))}
                </section>

                <section className="mb-6">
                  <h3 className="font-bold text-xl">Education</h3>
                  <hr className="my-2" />
                  {userData.educations.map((education, index) => (
                    <div key={index} className="my-2">
                      <p>{education.degree}</p>
                      <p className="text-gray-600">{education.institute}</p>
                      <p className="text-gray-600">
                        {education.start_year} - {education.end_year}
                      </p>
                      <p className="text-gray-600">{education.location}</p>
                    </div>
                  ))}
                </section>

                <section className="mb-6">
                  <h3 className="font-bold text-xl">Socials</h3>
                  <hr className="my-2" />
                  {userData.socials.map((social, index) => (
                    <div key={index} className="my-2">
                      <p>{social.category}</p>
                      <p className="text-blue-500">{social.link}</p>
                    </div>
                  ))}
                </section>

                <section className="mb-6">
                  <h3 className="font-bold text-xl">Emails</h3>
                  <hr className="my-2" />
                  {userData.emails.map((email, index) => (
                    <div key={index} className="my-2">
                      <p>{email.category}</p>
                      <p className="text-blue-500">{email.email}</p>
                    </div>
                  ))}
                </section>

                <section className="mb-6">
                  <h3 className="font-bold text-xl">Phones</h3>
                  <hr className="my-2" />
                  {userData.phones.map((phone, index) => (
                    <div key={index} className="my-2">
                      <p>{phone.category}</p>
                      <p className="text-blue-500">{phone.phone_no}</p>
                    </div>
                  ))}
                </section>
              </div>

              <div className="md:w-2/5 mt-5 mb-5">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden sticky top-10">
                  <img
                    className="w-full h-full object-cover"
                    src={`http://localhost:8800/${userData.user.image_url}`}
                    alt="User Avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto my-10">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicView;
