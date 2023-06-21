import React, { useState } from "react";
import SideBar from "./sidebar";
import axios from "axios";

function EditWork() {
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [start_year, setStartYear] = useState("");
  const [end_year, setEndYear] = useState("");
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
  return (
    <div className="flex flex-wrap">
      <div className="w-1/5">
        <SideBar />
      </div>
      <section className="m-5 w-3/5">
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
                  <button
                    onClick={handleAddWork}
                    className=" btn btn-success m-1"
                  >
                    Add Work
                  </button>
                </p>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <hr className="h-px bg-black border-0" />

        {/* {props.user_data.works.map((work) => (
          <div className="my-2">
            <p>Founder & CEO</p>
            <p>Niharon Technologies</p>
            <p>2019 - Present</p>
            <div className="flex flex-wrap gap-2">
              <button className="font-bold">[Edit]</button>
              <button className="font-bold">[Delete]</button>
            </div>
          </div>
        ))} */}

        <form method="dialog" className="modal-box">
          <p className="py-4">
            <input
              onChange={(e) => {
                //   setCompany(e.target.value);
              }}
              type="text"
              className="w-80 input w-full input-bordered m-1"
              placeholder="Company"
            />
            <input
              onChange={(e) => {
                //   setDesignation(e.target.value);
              }}
              type="text"
              className="w-80 input w-full input-bordered m-1"
              placeholder="Designation"
            />
            <div className="flex flex-wrap gap-2 m-1">
              <input
                onChange={(e) => {
                  // setStartYear(e.target.value);
                }}
                type="text"
                className="w-36 input w-full input-bordered"
                placeholder="Start"
              />
              <input
                onChange={(e) => {
                  // setEndYear(e.target.value);
                }}
                type="text"
                className="w-36 input w-full input-bordered "
                placeholder="End"
              />
            </div>
            <div className="flex flex-wrap">
              <button
                // onClick={handleAddWork}
                className=" btn btn-success m-1"
              >
                Update Work
              </button>
              <button
                // onClick={handleAddWork}
                className=" btn btn-warning m-1"
              >
                Delete Work
              </button>
            </div>
          </p>
        </form>

        <div className="my-2">
          <p>Founder & CEO</p>
          <p>Niharon Technologies</p>
          <p>2019 - Present</p>
          <div className="flex flex-wrap gap-2">
            <button className="font-bold">[Edit]</button>
            <button className="font-bold">[Delete]</button>
          </div>
        </div>

        <div className="my-2">
          <p>Founder & CEO</p>
          <p>Niharon Technologies</p>
          <p>2019 - Present</p>
          <div className="flex flex-wrap gap-2">
            <button className="font-bold">[Edit]</button>
            <button className="font-bold">[Delete]</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditWork;
