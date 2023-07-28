import React, { useState } from "react";
import SideBar from "../sidebar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../Navbar";
import { toast } from "react-hot-toast";

function EditPhones(props) {
  const [phone_id, setPhoneID] = useState("");
  const [category, setcategory] = useState("");
  const [phone_no, setphone_no] = useState("");

  async function handleAddPhone() {
    try {
      await axios({
        method: "post",
        url: "/admin/add_phone",
        baseURL: "http://localhost:8800",
        data: {
          user_id: props.user.user.user_id,
          category: category,
          phone_no: phone_no,
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
  async function handleUpdatePhone(phone_id) {
    try {
      await axios({
        method: "patch",
        url: "/admin/update_phone",
        baseURL: "http://localhost:8800",
        data: {
          user_id: props.user.user.user_id,
          phone_id: phone_id,
          category: category,
          phone_no: phone_no,
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

  async function handleDeletePhone(phone_id) {
    try {
      await axios({
        method: "delete",
        url: "/admin/delete_phone",
        baseURL: "http://localhost:8800",
        data: {
          phone_id: phone_id,
          user_id: props.user.user.user_id,
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
      <div className="flex flex-wrap">
        <section className="m-5 w-full">
          <div className="flex justify-between flex-wrap">
            <p className="font-bold">Phones</p>

            <div>
              <p
                className="font-bold"
                onClick={() => window.my_modal_add_phone.showModal()}
              >
                [Add]
              </p>

              <dialog id="my_modal_add_phone" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Add Phone</h3>
                  <p className="py-4">
                    <select
                      onChange={(e) => {
                        console.log(e.target.value);
                        setcategory(e.target.value);
                      }}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled selected>
                        Select category
                      </option>
                      <option>Mobile</option>
                      <option>Home</option>
                      <option>Work</option>
                    </select>
                    <input
                      onChange={(e) => {
                        setphone_no(e.target.value);
                      }}
                      category="text"
                      className="w-80 input w-full input-bordered m-1"
                      placeholder="Phone phone_no"
                    />

                    <button
                      onClick={handleAddPhone}
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
            // if phones are not empty or null
            props.user !== null && props.user !== undefined ? (
              props.user.phones.map((phone) => (
                <div className="my-2" key={phone.phone_id}>
                  <p>{phone.category}</p>
                  <p>{phone.phone_no}</p>

                  <div className="flex flex-wrap gap-2">
                    <div>
                      <p
                        className="font-bold"
                        key={phone.phone_id}
                        onClick={() => {
                          setPhoneID(phone.phone_id);
                          setcategory(phone.category);
                          setphone_no(phone.phone_no);
                          window.my_modal_edit_phone.showModal();
                        }}
                      >
                        [Edit]
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold"
                        onClick={() => {
                          setPhoneID(phone.phone_id);
                          window.my_modal_delete_phone.showModal();
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
                <h1 className="text-2xl">No phones found</h1>
              </div>
            )
          }

          <dialog id="my_modal_delete_phone" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Do you want to delete?</h3>
              <p className="py-4">
                <button
                  onClick={() => handleDeletePhone(phone_id)}
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

          <dialog id="my_modal_edit_phone" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Edit Phone</h3>
              <p className="py-4">
                <select
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select category
                  </option>
                  <option>Mobile</option>
                  <option>Home</option>
                  <option>Work</option>
                </select>
                <input
                  onChange={(e) => {
                    setphone_no(e.target.value);
                  }}
                  value={phone_no}
                  category="text"
                  className="w-80 input w-full input-bordered m-1"
                  placeholder="Phone phone_no"
                />
                <button
                  onClick={() => handleUpdatePhone(phone_id)}
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

export default EditPhones;
