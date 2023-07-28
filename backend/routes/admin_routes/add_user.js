const express = require("express");
const router = express.Router();
var connection = require("../../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", async (req, res) => {
  try {
    const { user_name, email, password, roll_no } = req.body;

    if (
      user_name === undefined ||
      email === undefined ||
      password === undefined ||
      roll_no === undefined ||
      user_name === "" ||
      email === "" ||
      password === "" ||
      roll_no === "" ||
      user_name === null ||
      email === null ||
      password === null ||
      roll_no === null
    ) {
      res.status(500).json({
        message: "Invalid request",
      });
      return;
    }
    const token = req.cookies.access_token;
    console.log(req);
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
                "insert into users ( user_name, email, password, roll_no ) values ?";

              console.log(req.body);

              const salt = bcrypt.genSaltSync(10);
              const hashedPassword = bcrypt.hashSync(req.body.password, salt);

              var values = [
                [
                  req.body.user_name,
                  req.body.email,
                  hashedPassword,
                  req.body.roll_no,
                ],
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
                        const { password, ...rest } = results[0];
                        res.status(200).json({
                          message: "User Added Successfully",
                          data: rest,
                        });
                      }
                    }
                  );
                }
              });
            }
          }
        );
        // new
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
