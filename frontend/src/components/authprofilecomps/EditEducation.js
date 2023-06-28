import React, { useState } from "react";
import SideBar from "./sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";

function EditEducation() {
  const [edu_id, seteduID] = useState("");
  const [institute, setinstitute] = useState("");
  const [degree, setdegree] = useState("");
  const [start_year, setStartYear] = useState("");
  const [end_year, setEndYear] = useState("");
  const [userData, setUserData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser.user_id);
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
      setIsLoading(true);
      console.error(error);
    }
  }, []);

  async function handleAddEducation() {
    try {
      await axios({
        method: "post",
        url: "/edit_profile/add_education",
        baseURL: "http://localhost:8800",
        data: {
          institute: institute,
          degree: degree,
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
  async function handleUpdateEducation(edu_id) {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_education",
        baseURL: "http://localhost:8800",
        data: {
          edu_id: edu_id,
          institute: institute,
          degree: degree,
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

  async function handleDeleteEducation(edu_id) {
    try {
      await axios({
        method: "delete",
        url: "/edit_profile/delete_education",
        baseURL: "http://localhost:8800",
        data: {
          edu_id: edu_id,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddEducation() {
    try {
      await axios({
        method: "post",
        url: "/edit_profile/add_education",
        baseURL: "http://localhost:8800",
        data: {
          institute: institute,
          degree: degree,
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
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <SideBar />

        <section className="m-5 w-3/5">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">Educations</p>

            <div>
              <p
                className="font-bold"
                onClick={() => window.my_modal_add_edu.showModal()}
              >
                [Add]
              </p>

              <dialog id="my_modal_add_edu" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    <input
                      onChange={(e) => {
                        setinstitute(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="institute"
                    />
                    <input
                      onChange={(e) => {
                        setdegree(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="degree"
                    />
                    <div className="flex flex-wrap gap-2 m-1">
                      <input
                        onChange={(e) => {
                          setStartYear(e.target.value);
                        }}
                        type="text"
                        className="w-36 input w-full input-bordered"
                        placeholder="Start"
                      />
                      <input
                        onChange={(e) => {
                          setEndYear(e.target.value);
                        }}
                        type="text"
                        className="w-36 input w-full input-bordered "
                        placeholder="End"
                      />
                    </div>
                    <button
                      onClick={handleAddEducation}
                      className=" btn btn-success m-1"
                    >
                      Add
                    </button>
                    <button className=" btn btn-cancel m-1">Cancel</button>
                  </p>
                </form>
                <div method="dialog" className="modal-backdrop">
                  <button>close</button>
                </div>
              </dialog>
            </div>
          </div>
          <hr className="h-px bg-black border-0" />

          {
            // if alumnies is not empty or null
            isLoading === false &&
            userData !== null &&
            userData !== undefined ? (
              userData.educations.map((edu) => (
                <div className="my-2" key={edu.edu_id}>
                  <p>{edu.institute}</p>
                  <p>{edu.degree}</p>
                  <p>
                    {edu.start_year} {"-"} {edu.end_year}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <p
                        className="font-bold"
                        key={edu.edu_id}
                        onClick={() => {
                          seteduID(edu.edu_id);
                          setinstitute(edu.institute);
                          setdegree(edu.degree);
                          setStartYear(edu.start_year);
                          setEndYear(edu.end_year);
                          window.my_modal_edit_edu.showModal();
                        }}
                      >
                        [Edit]
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold"
                        onClick={() => {
                          seteduID(edu.edu_id);
                          window.my_modal_delete_edu.showModal();
                        }}
                      >
                        [Delete]
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <h1 className="text-2xl">No edus Found</h1>
              </div>
            )
          }

          <dialog id="my_modal_delete_edu" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Do you want to delete?</h3>
              <p className="py-4">
                <button
                  onClick={() => handleDeleteEducation(edu_id)}
                  className=" btn btn-success m-1"
                >
                  Yes
                </button>
                <button className=" btn btn-cancel m-1">Cancel</button>
              </p>
            </form>
            <div method="dialog" className="modal-backdrop">
              <button>close</button>
            </div>
          </dialog>

          <dialog id="my_modal_edit_edu" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                <input
                  onChange={(e) => {
                    setinstitute(e.target.value);
                  }}
                  value={institute}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="institute"
                />
                <input
                  onChange={(e) => {
                    setdegree(e.target.value);
                  }}
                  value={degree}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="degree"
                />
                <div className="flex flex-wrap gap-2 m-1">
                  <input
                    onChange={(e) => {
                      setStartYear(e.target.value);
                    }}
                    value={start_year}
                    type="text"
                    className="w-36 input w-full input-bordered"
                    placeholder="Start"
                  />
                  <input
                    onChange={(e) => {
                      setEndYear(e.target.value);
                    }}
                    value={end_year}
                    type="text"
                    className="w-36 input w-full input-bordered "
                    placeholder="End"
                  />
                </div>
                <button
                  onClick={() => handleUpdateEducation(edu_id)}
                  className=" btn btn-success m-1"
                >
                  Update
                </button>
                <button className=" btn btn-cancel m-1">Cancel</button>
              </p>
            </form>
            <div method="dialog" className="modal-backdrop">
              <button>close</button>
            </div>
          </dialog>
        </section>
      </div>
    </div>
  );
}

export default EditEducation;
