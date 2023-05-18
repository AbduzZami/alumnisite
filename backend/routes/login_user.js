const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.post("/", async (req, res) => {
  try {
    connection.query(
      `select user.user_id, user.user_name, user.email,user.phone, user.roll_no, user.verification_status from user where email = '${req.query.email}' and password = '${req.query.password}'`,
      function (error, results, fields) {
        if (error) {
          res.status(500).send("Internal server error");
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
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
