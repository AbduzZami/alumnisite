const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var connection = require("./connection.js");
const getAllUsers = require("./routes/get_all_users");
const registerUser = require("./routes/register_user");
const loginUser = require("./routes/login_user");

const app = express();
const port = 8800;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", getAllUsers);
app.use("/register", registerUser);
app.use("/login", loginUser);
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
