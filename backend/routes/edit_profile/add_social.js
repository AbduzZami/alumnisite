const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.post("/", async (req, res) => {
  const category = req.body.category;
  const link = req.body.link;

  if (
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
        var sql = `insert into socials ( user_id, category, link ) values  ?`;

        var values = [[decoded.user_id, category, link]];

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
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.sqlMessage,
    });
  }
});

module.exports = router;
