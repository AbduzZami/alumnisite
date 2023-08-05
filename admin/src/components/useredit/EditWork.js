import React, { useState } from "react";
import SideBar from "../sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";
import { toast } from "react-hot-toast";

function EditWork(props) {
  const [work_id, setWorkID] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [start_year, setStartYear] = useState("");
  const [end_year, setEndYear] = useState("");
  const [location, setLocation] = useState("");
  const [userData, setUserData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log(currentUser.user_id);
  //   try {
  //     axios({
  //       method: "get",
  //       url: `/userbyid/${currentUser.user_id}`,
  //       baseURL: "http://localhost:8800",
  //       withCredentials: true,
  //     }).then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         console.log(res.data.data);
  //         setUserData(res.data.data);
  //       } else {
  //         setUserData(null);
  //       }
  //       setIsLoading(false);
  //     });
  //   } catch (error) {
  //     setUserData([]);
  //     setIsLoading(true);
  //     console.error(error);
  //   }
  // }, []);

  async function handleAddWork() {
    try {
      await axios({
        method: "post",
        url: "/admin/add_work",
        baseURL: "http://localhost:8800",
        data: {
          user_id: props.user.user.user_id,
          company: company,
          designation: designation,
          start_year: start_year,
          end_year: end_year,
          location: location,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        toast.success(res.data.message);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpdateWork(work_id) {
    try {
      await axios({
        method: "patch",
        url: "/admin/update_work",
        baseURL: "http://localhost:8800",
        data: {
          user_id: props.user.user.user_id,
          work_id: work_id,
          company: company,
          designation: designation,
          start_year: start_year,
          end_year: end_year,
          location: location,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        toast.success(res.data.message);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteWork(work_id) {
    try {
      await axios({
        method: "delete",
        url: "/admin/delete_work",
        baseURL: "http://localhost:8800",
        data: { user_id: props.user.user.user_id, work_id: work_id },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        toast.success(res.data.message);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="">
      <div className="flex flex-wrap">
        <section className="m-5 w-full">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">Work</p>

            <div>
              <p
                className="font-bold"
                onClick={() => window.my_modal_add_work.showModal()}
              >
                [Add]
              </p>

              <dialog id="my_modal_add_work" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    <input
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Company"
                    />
                    <input
                      onChange={(e) => {
                        setDesignation(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Designation"
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
                    <input
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Location"
                    />
                    <button
                      onClick={handleAddWork}
                      className=" btn btn-success m-1"
                    >
                      Add Work
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

            props.user.works !== null && props.user.works !== undefined ? (
              props.user.works.map((work) => (
                <div className="my-2" key={work.work_id}>
                  <p>{work.company}</p>
                  <p>{work.designation}</p>
                  <p>
                    {work.start_year} {"-"} {work.end_year}
                  </p>
                  <p>{work.location}</p>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <p
                        className="font-bold"
                        key={work.work_id}
                        onClick={() => {
                          setWorkID(work.work_id);
                          setCompany(work.company);
                          setDesignation(work.designation);
                          setStartYear(work.start_year);
                          setEndYear(work.end_year);
                          setLocation(work.location);
                          window.my_modal_edit_work.showModal();
                        }}
                      >
                        [Edit]
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold"
                        onClick={() => {
                          setWorkID(work.work_id);
                          window.my_modal_delete_work.showModal();
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
                <h1 className="text-2xl">No Works Found</h1>
              </div>
            )
          }

          <dialog id="my_modal_delete_work" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Do you want to delete?</h3>
              <p className="py-4">
                <button
                  onClick={() => handleDeleteWork(work_id)}
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

          <dialog id="my_modal_edit_work" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                <input
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  value={company}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="Company"
                />
                <input
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  value={designation}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="Designation"
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
                <input
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="Location"
                />
                <button
                  onClick={() => handleUpdateWork(work_id)}
                  className=" btn btn-success m-1"
                >
                  Update Work
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

export default EditWork;
