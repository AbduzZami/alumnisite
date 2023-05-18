const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.post("/", async (req, res) => {
  try {
    console.log("Connected to the database");
    var sql =
      "insert into user ( user_name, email, password, phone, roll_no ) values ?";

    var values = [
      [
        req.query.user_name,
        req.query.email,
        req.query.password,
        req.query.phone,
        req.query.roll_no,
      ],
    ];

    connection.query(sql, [values], function (error, result, fields) {
      if (error) {
        res.status(500).send("Internal server error" + error);
      } else {
        connection.query(
          `select user.user_id,user.user_name,user.email,user.phone, user.roll_no, user.verification_status from user where email = '${req.query.email}' and password = '${req.query.password}'`,
          function (error, result, fields) {
            if (error) {
              res.status(500).send("Internal server error" + error);
            } else {
              res.status(200).json({
                message: "User Registered Successfully",
                data: result,
              });
            }
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error" + error);
  }
});

module.exports = router;
