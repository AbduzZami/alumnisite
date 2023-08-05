const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var connection = require("./connection.js");
const getAllUsers = require("./routes/get_all_users");
const getUserById = require("./routes/get_user_by_id");
const registerUser = require("./routes/register_user");
const loginUser = require("./routes/login_user");
const searchUser = require("./routes/search_users");
const logout = require("./routes/logout");
const updateName = require("./routes/edit_profile/update_name");
const updateRoll = require("./routes/edit_profile/update_roll");
const setHeadline = require("./routes/edit_profile/set_headline");
const setImage = require("./routes/edit_profile/set_image");

// posts
const addPost = require("./routes/add_post");
const getAllPost = require("./routes/get_all_post");
const getMyPosts = require("./routes/get_my_posts");
const getPostDetails = require("./routes/get_post_details");

// work
const addWork = require("./routes/edit_profile/add_work");
const deleteWork = require("./routes/edit_profile/delete_work");
const updateWork = require("./routes/edit_profile/update_work");

// education
const addEducation = require("./routes/edit_profile/add_education");
const deleteEducation = require("./routes/edit_profile/delete_education");
const updateEducation = require("./routes/edit_profile/update_education");

// socials
const addSocial = require("./routes/edit_profile/add_social");
const deleteSocial = require("./routes/edit_profile/delete_social");
const updateSocial = require("./routes/edit_profile/update_social");

// phones
const addPhone = require("./routes/edit_profile/add_phone");
const deletePhone = require("./routes/edit_profile/delete_phone");
const updatePhone = require("./routes/edit_profile/update_phone");

// emails
const addEmail = require("./routes/edit_profile/add_email");
const deleteEmail = require("./routes/edit_profile/delete_email");
const updateEmail = require("./routes/edit_profile/update_email");

// admin

const adminLogin = require("./routes/admin_routes/login_admin.js");
const addUserByAdmin = require("./routes/admin_routes/add_user.js");
const editUserByAdmin = require("./routes/admin_routes/edit_user.js");
const changeUserStatus = require("./routes/admin_routes/change_user_status.js");
const changePostStatus = require("./routes/admin_routes/set_post_status.js");
const adminLogout = require("./routes/admin_routes/logout_admin.js");
const adminPost = require("./routes/admin_routes/add_post_admin.js");
const adminSetHeadline = require("./routes/admin_routes/set_headline.js");
const adminAddWork = require("./routes/admin_routes/add_work.js");
const adminDeleteWork = require("./routes/admin_routes/delete_work.js");
const adminUpdateWork = require("./routes/admin_routes/update_work.js");
const adminAddEducation = require("./routes/admin_routes/add_education.js");
const adminDeleteEducation = require("./routes/admin_routes/delete_education.js");
const adminUpdateEducation = require("./routes/admin_routes/update_education.js");
const adminAddSocial = require("./routes/admin_routes/add_social.js");
const adminDeleteSocial = require("./routes/admin_routes/delete_social.js");
const adminUpdateSocial = require("./routes/admin_routes/update_social.js");
const adminAddPhone = require("./routes/admin_routes/add_phone.js");
const adminDeletePhone = require("./routes/admin_routes/delete_phone.js");
const adminUpdatePhone = require("./routes/admin_routes/update_phone.js");
const adminAddEmail = require("./routes/admin_routes/add_email.js");
const adminDeleteEmail = require("./routes/admin_routes/delete_email.js");
const adminUpdateEmail = require("./routes/admin_routes/update_email.js");

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5000",
      "https://ruet-alumni.web.app",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
    optionSuccessStatus: 200,
    Headers: true,
    exposedHeaders: "Set-Cookie",
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Content-Type",
      "Authorization",
    ],
  })
);
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// app.set("view engine", "hbs");

app.use("/users", getAllUsers);
app.use("/users/search", searchUser);
app.use("/userbyid", getUserById);
app.use("/register", registerUser);
app.use("/login", loginUser);
app.use("/logout", logout);
app.use("/add_post", addPost);
app.use("/posts", getAllPost);
app.use("/posts/my", getMyPosts);
app.use("/post", getPostDetails);
app.use("/edit_profile/update_name", updateName);
app.use("/edit_profile/update_roll", updateRoll);
app.use("/edit_profile/set_headline", setHeadline);
app.use("/edit_profile/set_image", setImage);
app.use("/edit_profile/add_work", addWork);
app.use("/edit_profile/delete_work", deleteWork);
app.use("/edit_profile/update_work", updateWork);
app.use("/edit_profile/add_education", addEducation);
app.use("/edit_profile/delete_education", deleteEducation);
app.use("/edit_profile/update_education", updateEducation);
app.use("/admin/login", adminLogin);
app.use("/admin/adduser", addUserByAdmin);
app.use("/admin/edituser", editUserByAdmin);
app.use("/admin/changeuserstatus", changeUserStatus);
app.use("/edit_profile/add_social", addSocial);
app.use("/edit_profile/delete_social", deleteSocial);
app.use("/edit_profile/update_social", updateSocial);
app.use("/edit_profile/add_phone", addPhone);
app.use("/edit_profile/delete_phone", deletePhone);
app.use("/edit_profile/update_phone", updatePhone);
app.use("/edit_profile/add_email", addEmail);
app.use("/edit_profile/delete_email", deleteEmail);
app.use("/edit_profile/update_email", updateEmail);
app.use("/admin/set_post_status", changePostStatus);
app.use("/admin/logout", adminLogout);
app.use("/admin/add_post", adminPost);
app.use("/admin/set_headline", adminSetHeadline);
app.use("/admin/add_work", adminAddWork);
app.use("/admin/delete_work", adminDeleteWork);
app.use("/admin/update_work", adminUpdateWork);
app.use("/admin/add_education", adminAddEducation);
app.use("/admin/delete_education", adminDeleteEducation);
app.use("/admin/update_education", adminUpdateEducation);
app.use("/admin/add_social", adminAddSocial);
app.use("/admin/delete_social", adminDeleteSocial);
app.use("/admin/update_social", adminUpdateSocial);
app.use("/admin/add_phone", adminAddPhone);
app.use("/admin/delete_phone", adminDeletePhone);
app.use("/admin/update_phone", adminUpdatePhone);
app.use("/admin/add_email", adminAddEmail);
app.use("/admin/delete_email", adminDeleteEmail);
app.use("/admin/update_email", adminUpdateEmail);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
