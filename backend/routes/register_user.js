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
        connection.query(
          `select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status, users.image_url from users where email = '${req.body.email}'`,
          function (error, results, fields) {
            if (error) {
              res.status(500).json({
                message: error.sqlMessage,
              });
            } else {
              const token = jwt.sign(
                {
                  user_id: results[0].user_id,
                  user_name: results[0].user_name,
                  email: results[0].email,
                  roll_no: results[0].roll_no,
                  image_url: results[0].image_url,
                  verification_status: results[0].verification_status,
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "7d",
                }
              );

              const { password, ...rest } = results[0];
              res
                .cookie("access_token", token, {
                  httpOnly: true,
                })
                .status(200)
                .json({
                  message: "User Registered Successfully",
                  data: rest,
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
