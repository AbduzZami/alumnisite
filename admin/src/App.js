import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/Login";

import Error from "./pages/Error";

import General from "./components/useredit/General";

import RequireAuth from "./Auth";
import UserEditPage from "./pages/UserEditPage";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Users />} />
        <Route path="/signin" element={<LoginPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserEditPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
