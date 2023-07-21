import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import NewsEvents from "./pages/NewsEvents";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Navbar from "./components/Navbar";
import NewsEventDetails from "./pages/NewsEventDetails";
import Error from "./pages/Error";
import PostNews from "./pages/PostNews";
import AuthProfile from "./components/AuthProfile";
import PublicView from "./components/authprofilecomps/PublicView";
import PersonalInformation from "./components/authprofilecomps/PersonalInfo";
import EditWork from "./components/authprofilecomps/EditWork";
import EditEducation from "./components/authprofilecomps/EditEducation";
import MyPosts from "./components/authprofilecomps/MyPosts";
import toast, { Toaster } from "react-hot-toast";
import EditSocials from "./components/authprofilecomps/EditSocials";
import RequireAuth from "./contexts/RequireAuth";
import EditPhones from "./components/authprofilecomps/EditPhone";
import EditEmail from "./components/authprofilecomps/EditEmail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/newsevents" element={<NewsEvents />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route element={<RequireAuth />}>
          <Route path="/editprofile" element={<PublicView />} />
          <Route path="/editprofile/publicview" element={<PublicView />} />
          <Route
            path="/editprofile/general"
            element={<PersonalInformation />}
          />
          <Route path="/editprofile/editwork" element={<EditWork />} />
          <Route
            path="/editprofile/editeducation"
            element={<EditEducation />}
          />
          <Route path="/editprofile/editsocials" element={<EditSocials />} />
          <Route path="/editprofile/editphones" element={<EditPhones />} />
          <Route path="/editprofile/editemails" element={<EditEmail />} />
          <Route path="/editprofile/myposts" element={<MyPosts />} />
        </Route>
        <Route path="/newsevents/createpost" element={<PostNews />} />
        <Route path="/newsevents/:post_id" element={<NewsEventDetails />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
