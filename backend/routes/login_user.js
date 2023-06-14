const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.post("/", async (req, res) => {
  try {
    connection.query(
      `select users.user_id, users.user_name, users.email, users.roll_no, users.verification_status from users where email = '${req.body.email}' and password = '${req.body.password}'`,
      function (error, results, fields) {
        if (error) {
          res.status(500).send("Internal server error" + error);
        } else {
          res.status(200).json({
            message: "Login Success",
            data: results,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error" + error);
  }
});

module.exports = router;
