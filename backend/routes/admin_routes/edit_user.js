const express = require("express");
const router = express.Router();
var connection = require("../../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.patch("/", async (req, res) => {
  const user_id = req.body.user_id;
  const user_name = req.body.user_name;
  const email = req.body.email;
  const roll_no = req.body.roll_no;

  if (
    user_id === undefined ||
    user_name === undefined ||
    email === undefined ||
    user_id === "" ||
    user_name === "" ||
    email === "" ||
    user_id === null ||
    user_name === null ||
    email === null
  ) {
    res.status(500).json({
      message: "Invalid request",
    });
    return;
  }

  try {
    const token = req.cookies.access_token;
    if (!token) {
      res.status(401).json({
        message: "Unauthorized Access",
      });
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "Session Expired",
        });
        return;
      } else {
        connection.query(
          `select * from admins where admins.admin_id = '${decoded.admin_id}' and admins.user_name = '${decoded.user_name}'`,
          function (error, result, fields) {
            if (error) {
              res.status(500).json({
                message: "You are not an admin",
              });
            } else {
              var sql = `update users set user_name = '${user_name}', email = '${email}', roll_no = '${roll_no}'  where users.user_id = '${user_id}'`;

              console.log(req.body);

              // const salt = bcrypt.genSaltSync(10);
              // const hashedPassword = bcrypt.hashSync(req.body.password, salt);

              connection.query(sql, function (error, result, fields) {
                if (error) {
                  res.status(500).json({
                    message: error.sqlMessage,
                  });
                } else {
                  res.status(200).json({
                    message: "User Updated Successfully",
                  });
                }
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
