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

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    var values = [
      [req.body.user_name, req.body.email, hashedPassword, req.body.roll_no],
    ];

    connection.query(sql, [values], function (error, result, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
          data: null,
        });
      } else {
        const isMatched = bcrypt.decodeBase64(
          req.body.password,
          hashedPassword
        );
        if (isMatched) {
          connection.query(
            `select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status from users where email = '${req.body.email}'`,
            function (error, result, fields) {
              if (error) {
                res.status(500).json({
                  message: error.sqlMessage,
                  data: null,
                });
              } else {
                res.status(200).json({
                  message: "users Registered Successfully",
                  data: result[0],
                });
              }
            }
          );
        } else {
          res.status(500).json({
            message: "Password not matched",
            data: null,
          });
        }
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
