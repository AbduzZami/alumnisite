import React, { useState } from "react";
import SideBar from "./sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";

function EditEmail() {
  const [email_id, setEmailID] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
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

  async function handleAddEmail() {
    try {
      await axios({
        method: "post",
        url: "/edit_profile/add_email",
        baseURL: "http://localhost:8800",
        data: {
          category: category,
          email: email,
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
  async function handleUpdateEmail(email_id) {
    try {
      await axios({
        method: "patch",
        url: "/edit_profile/update_email",
        baseURL: "http://localhost:8800",
        data: {
          email_id: email_id,
          category: category,
          email: email,
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

  async function handleDeleteEmail(email_id) {
    try {
      await axios({
        method: "delete",
        url: "/edit_profile/delete_email",
        baseURL: "http://localhost:8800",
        data: {
          email_id: email_id,
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
            <p className="font-bold">Emails</p>

            <div>
              <p
                className="font-bold"
                onClick={() => window.my_modal_add_email.showModal()}
              >
                [Add]
              </p>

              <dialog id="my_modal_add_email" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Add Email</h3>
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
                      <option>Personal</option>
                      <option>Work</option>
                    </select>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Email address"
                    />

                    <button
                      onClick={handleAddEmail}
                      className="btn btn-success m-1"
                    >
                      Add
                    </button>
                    <button className="btn btn-cancel m-1">Cancel</button>
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
            // if emails are not empty or null
            isLoading === false &&
            userData !== null &&
            userData !== undefined ? (
              userData.emails.map((email) => (
                <div className="my-2" key={email.email_id}>
                  <p>{email.category}</p>
                  <p>{email.email}</p>

                  <div className="flex flex-wrap gap-2">
                    <div>
                      <p
                        className="font-bold"
                        key={email.email_id}
                        onClick={() => {
                          setEmailID(email.email_id);
                          setCategory(email.category);
                          setEmail(email.email);
                          window.my_modal_edit_email.showModal();
                        }}
                      >
                        [Edit]
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold"
                        onClick={() => {
                          setEmailID(email.email_id);
                          window.my_modal_delete_email.showModal();
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
                <h1 className="text-2xl">No emails found</h1>
              </div>
            )
          }

          <dialog id="my_modal_delete_email" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Do you want to delete?</h3>
              <p className="py-4">
                <button
                  onClick={() => handleDeleteEmail(email_id)}
                  className="btn btn-success m-1"
                >
                  Yes
                </button>
                <button className="btn btn-cancel m-1">Cancel</button>
              </p>
            </form>
            <div method="dialog" className="modal-backdrop">
              <button>close</button>
            </div>
          </dialog>

          <dialog id="my_modal_edit_email" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Edit Email</h3>
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
                  <option>Personal</option>
                  <option>Work</option>
                </select>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="Email address"
                />
                <button
                  onClick={() => handleUpdateEmail(email_id)}
                  className="btn btn-success m-1"
                >
                  Update
                </button>
                <button className="btn btn-cancel m-1">Cancel</button>
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

export default EditEmail;
