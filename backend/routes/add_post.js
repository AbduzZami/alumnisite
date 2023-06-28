const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const image_url = req.body.image_url;

    console.log(title);
    console.log(description);
    console.log(image_url);

    if (
      title === undefined ||
      description === undefined ||
      image_url === undefined ||
      title === "" ||
      description === "" ||
      image_url === "" ||
      title === null ||
      description === null ||
      image_url === null
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
        console.log("Connected to the database");
        var sql = `insert into posts ( user_id, title, description, image_url ) values ?`;

        var values = [
          [
            decoded.user_id,
            req.body.title,
            req.body.description,
            req.body.image_url,
          ],
        ];

        console.log(req.body);

        connection.query(sql, [values], function (error, result, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message:
                "Post added successfully. Will be public after a review.",
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
