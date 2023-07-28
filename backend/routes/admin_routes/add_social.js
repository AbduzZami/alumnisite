const express = require("express");
const router = express.Router();
var connection = require("../../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const category = req.body.category;
    const link = req.body.link;

    if (
      user_id === undefined ||
      user_id === "" ||
      user_id === null ||
      category === undefined ||
      link === undefined ||
      category === "" ||
      link === "" ||
      category === null ||
      link === null
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
              console.log("Connected to the database");
              var sql = `insert into socials ( user_id, category, link ) values  ?`;

              var values = [[user_id, category, link]];

              console.log(req.body);

              connection.query(sql, [values], function (error, result, fields) {
                if (error) {
                  res.status(500).json({
                    message: error.sqlMessage,
                  });
                } else {
                  res.status(200).json({
                    message: "Social added successfully",
                  });
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
