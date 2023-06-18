import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import axios from "axios";

function AuthProfile(props) {
  const [name, setName] = useState("");

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

  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="flex flex-col-reverse md:flex-row mx-5">
          <div className="md:w-4/6 mr-10">
            <section>
              <div className="flex flex-wrap">
                <p className="font-bold text-2xl">
                  {props.user_data.user_name}
                </p>
                <button
                  className="btn btn-circle btn-xs ml-2"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-edit h-4 w-4 "
                  >
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </button>

                <dialog id="my_modal_2" className="modal">
                  <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        className="w-80 input w-full input-bordered"
                        placeholder="Update Name"
                      />
                      <button
                        onClick={handleUpdateName}
                        className="ml-5 btn btn-success"
                      >
                        Update
                      </button>
                    </p>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
              <div className="flex flex-wrap">
                <p className="text-lg">{props.user_data.roll_no}</p>
                <button className="btn btn-circle btn-xs ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-edit h-4 w-4 "
                  >
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                  </svg>
                </button>
              </div>
            </section>

            <section className="mt-5">
              <div className="flex justify-between flex-wrap">
                <p className="font-bold">Work</p>
                <p className="font-bold">[Add]</p>
              </div>
              <hr className="h-px bg-black border-0" />
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
              </div>
              <div className="my-2">
                <p>Founder & CEO</p>
                <p>Niharon Technologies</p>
                <p>2019 - Present</p>
              </div>
            </section>

            <section className="mt-5">
              <div className="flex flex-wrap justify-between">
                <p className="font-bold">Education</p>
                <p className="font-bold">[Add]</p>
              </div>
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
                <a href="mailto:abduz.zami@gmail.com">abduz.zami@gmail.com</a>
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

      <div />
    </div>
  );
}

export default AuthProfile;
