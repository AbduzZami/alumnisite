import React, { useState } from "react";
import SideBar from "./sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";

function EditSocials() {
  const [social_id, setSocialID] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [userData, setUserData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(currentUser.user_id);
    try {
      axios({
        method: "get",
        url: `/userbyid/${currentUser.user_id}`,
        baseURL: "https://alumni-backend-lavs.onrender.com",
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.data.data);
          setUserData(res.data.data);
          // refresh page
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
  }, [currentUser]);

  async function handleAddSocial() {
    try {
      await axios({
        method: "post",
        url: "/edit_profile/add_social",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          category: category,
          link: link,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpdateSocial(edu_id) {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_social",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          social_id: social_id,
          category: category,
          link: link,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteSocial(edu_id) {
    try {
      await axios({
        method: "delete",
        url: "/edit_profile/delete_social",
        baseURL: "https://alumni-backend-lavs.onrender.com",
        data: {
          social_id: social_id,
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        window.location.reload();
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
            <p className="font-bold">Socials</p>

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
                    <select
                      onChange={(e) => {
                        console.log(e.target.value);
                        setCategory(e.target.value);
                      }}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Select Category
                      </option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>LinkedIn</option>
                      <option>Twitter</option>
                      <option>Youtube</option>
                      <option>Website</option>
                    </select>
                    {/* <input
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="institute"
                    /> */}
                    <input
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Link"
                    />

                    <button
                      onClick={handleAddSocial}
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
              userData.socials.map((social) => (
                <div className="my-2" key={social.social_id}>
                  <p>{social.category}</p>
                  <p>{social.link}</p>

                  <div className="flex flex-wrap gap-2">
                    <div>
                      <p
                        className="font-bold"
                        key={social.social_id}
                        onClick={() => {
                          setSocialID(social.social_id);
                          setCategory(social.category);
                          setLink(social.link);
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
                          setSocialID(social.social_id);
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
                  onClick={() => handleDeleteSocial(social_id)}
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
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Twitter</option>
                  <option>Youtube</option>
                  <option>Website</option>
                </select>
                <input
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  value={link}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="degree"
                />
                <button
                  onClick={() => handleUpdateSocial(social_id)}
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

export default EditSocials;
