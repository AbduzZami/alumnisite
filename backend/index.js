const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var connection = require("./connection.js");
const getAllUsers = require("./routes/get_all_users");
const registerUser = require("./routes/register_user");
const loginUser = require("./routes/login_user");
const updateName = require("./routes/edit_profile/update_name");
const updateRoll = require("./routes/edit_profile/update_roll");

// work
const addWork = require("./routes/edit_profile/add_work");
const deleteWork = require("./routes/edit_profile/delete_work");
const updateWork = require("./routes/edit_profile/update_work");

// education
// const addEducation = require("./routes/edit_profile/add_education");
// const deleteEducation = require("./routes/edit_profile/delete_education");
// const updateEducation = require("./routes/edit_profile/update_education");

// socials
// const addSocial = require("./routes/edit_profile/add_social");
// const deleteSocial = require("./routes/edit_profile/delete_social");
// const updateSocial = require("./routes/edit_profile/update_social");

// phones
// const addPhone = require("./routes/edit_profile/add_phone");
// const deletePhone = require("./routes/edit_profile/delete_phone");
// const updatePhone = require("./routes/edit_profile/update_phone");

// emails
// const addEmail = require("./routes/edit_profile/add_email");
// const deleteEmail = require("./routes/edit_profile/delete_email");
// const updateEmail = require("./routes/edit_profile/update_email");

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.set("view engine", "hbs");

app.use("/users", getAllUsers);
app.use("/register", registerUser);
app.use("/login", loginUser);
app.use("/edit_profile/update_name", updateName);
app.use("/edit_profile/update_roll", updateRoll);
app.use("/edit_profile/add_work", addWork);
app.use("/edit_profile/delete_work", deleteWork);
app.use("/edit_profile/update_work", updateWork);
// app.use("/sharee/arong", arongSharee);
// app.use("/shoemen/bata", bataMenShoe);
// app.use("/shoewomen/bata", bataWomenShoe);
// app.use("/shalwar/arong", arongShalwar);
// app.use("/panjabi/catseye", catseyePanjabi);
// app.use("/panjabi/yellow", yellowPanjabi);
// app.use("/sharee/yellow", yellowsharee);
// app.use("/shalwar/yellow", yellowshalwar);
// app.use("/pajama/yellow", yellowpajama);
// app.use("/shoemen/apex", apexMenShoe);
// app.use("/shoewomen/apex", apexWomenShoe);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
