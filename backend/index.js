const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var connection = require("./connection.js");
const getAllUsers = require("./routes/get_all_users");
const getUserById = require("./routes/get_user_by_id");
const registerUser = require("./routes/register_user");
const loginUser = require("./routes/login_user");
const logout = require("./routes/logout");
const updateName = require("./routes/edit_profile/update_name");
const updateRoll = require("./routes/edit_profile/update_roll");
const setHeadline = require("./routes/edit_profile/set_headline");
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

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// app.set("view engine", "hbs");

app.use("/users", getAllUsers);
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
