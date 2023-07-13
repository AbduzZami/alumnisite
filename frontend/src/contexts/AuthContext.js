import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  async function login(email, password) {
    try {
      axios({
        method: "post",
        url: "/login",
        baseURL: "http://localhost:8800",
        data: {
          email: email,
          password: password,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setCurrentUser(res.data.data);
            toast(res.data.message);
            navigate("/");
          } else {
            toast(res.data.message);
          }
        })
        .catch((err) => {
          toast(err.response.data.message);
        });
    } catch (error) {
      toast(error);
      console.error(error);
    }
  }

  async function register(user_name, email, password, roll_no) {
    try {
      axios({
        method: "post",
        url: "/register",
        baseURL: "http://localhost:8800",
        data: {
          user_name: user_name,
          email: email,
          password: password,
          roll_no: roll_no,
        },
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCurrentUser(res.data.data);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      axios({
        method: "post",
        url: "/logout",
        baseURL: "http://localhost:8800",
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCurrentUser(null);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
