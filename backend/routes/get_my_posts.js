const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
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
        console.log("Connected to the database");
        var sql = `select * from posts where posts.user_id = ${decoded.user_id}`;

        connection.query(sql, function (error, results, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message: "Success",
              data: results,
            });
          }
        });
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
