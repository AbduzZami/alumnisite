const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.patch("/", async (req, res) => {
  const headline = req.body.headline;
  const user_id = req.body.user_id;

  if (
    headline === undefined ||
    headline === "" ||
    headline === null ||
    user_id === undefined ||
    user_id === "" ||
    user_id === null
  ) {
    res.status(500).json({
      message: "Invalid request",
    });
    return;
  }
  try {
    const token = req.cookies.access_token_admin;
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
              console.log("Connected to the database");
              var sql = ` insert into user_headline (user_id, headline) values (${req.body.user_id}, '${headline}') on DUPLICATE KEY UPDATE headline='${headline}'`;

              console.log(req.body);

              connection.query(sql, function (error, result, fields) {
                if (error) {
                  res.status(500).json({
                    message: error.sqlMessage,
                  });
                } else {
                  res.status(200).json({
                    message: "Headline set successfully",
                  });
                }
              });
            }
          }
        );

        // end
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
