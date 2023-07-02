const express = require("express");
const router = express.Router();
var connection = require("../../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const user_name = req.body.user_name;
  const email = req.body.email;
  const roll_no = req.body.roll_no;

  if (
    user_name === undefined ||
    email === undefined ||
    user_name === "" ||
    email === "" ||
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
              var sql =
                "insert into users ( user_name, email, password, roll_no , verification_status) values ?";

              console.log(req.body);

              // const salt = bcrypt.genSaltSync(10);
              // const hashedPassword = bcrypt.hashSync(req.body.password, salt);

              var values = [
                [
                  req.body.user_name,
                  req.body.email,
                  "admin_created",
                  req.body.roll_no,
                  "verified",
                ],
              ];

              connection.query(sql, [values], function (error, result, fields) {
                if (error) {
                  res.status(500).json({
                    message: error.sqlMessage,
                  });
                } else {
                  connection.query(
                    `select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status from users where email = '${req.body.email}'`,
                    function (error, result, fields) {
                      if (error) {
                        res.status(500).json({
                          message: error.sqlMessage,
                        });
                      } else {
                        res.status(200).json({
                          message: "User Added Successfully",
                          data: result[0],
                        });
                      }
                    }
                  );
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
