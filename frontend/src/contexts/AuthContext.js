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
        withCredentials: true,
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCurrentUser(res.data.data);
          toast(res.data.message);
          navigate("/");
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
          toast(res.data.message);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function updateData() {
    if (currentUser) {
      try {
        axios({
          method: "get",
          url: `/userbyid/${currentUser.user_id}`,
          baseURL: "http://localhost:8800",
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (!isEqual(currentUser, res.data.data.user)) {
              setCurrentUser(res.data.data.user);
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  const isEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      console.log(obj1[key], obj2[key]);
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    if (currentUser) {
      try {
        axios({
          method: "get",
          url: `/userbyid/${currentUser.user_id}`,
          baseURL: "http://localhost:8800",
        }).then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (!isEqual(currentUser, res.data.data.user)) {
              setCurrentUser(res.data.data.user);
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        logout,
        updateData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
