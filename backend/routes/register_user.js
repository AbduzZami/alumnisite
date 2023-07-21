const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    console.log("Connected to the database");
    var sql =
      "insert into users ( user_name, email, password, roll_no ) values ?";

    console.log(req.body);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    var values = [
      [req.body.user_name, req.body.email, hashedPassword, req.body.roll_no],
    ];

    connection.query(sql, [values], function (error, result, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
        });
      } else {
        // const isMatched = bcrypt.decodeBase64(
        //   req.body.password,
        //   hashedPassword
        // );

        connection.query(
          `select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status, users.image_url from users where email = '${req.body.email}'`,
          function (error, result, fields) {
            if (error) {
              res.status(500).json({
                message: error.sqlMessage,
              });
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
    });
  }
});

module.exports = router;
