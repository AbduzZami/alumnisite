const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.post("/", async (req, res) => {
  try {
    console.log("Connected to the database");
    var sql =
      "insert into users ( user_name, email, password, roll_no ) values ?";

    console.log(req.body);

    var values = [
      [req.body.user_name, req.body.email, req.body.password, req.body.roll_no],
    ];

    connection.query(sql, [values], function (error, result, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
          data: null,
        });
      } else {
        connection.query(
          `select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status from users where email = '${req.body.email}' and password = '${req.body.password}'`,
          function (error, result, fields) {
            if (error) {
              res.status(500).send("Internal server error" + error);
            } else {
              res.status(200).json({
                message: "users Registered Successfully",
                data: result[0],
              });
            }
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.sqlMessage,
      data: null,
    });
  }
});

module.exports = router;
