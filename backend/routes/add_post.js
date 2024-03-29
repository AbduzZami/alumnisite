const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;

    console.log(title);
    console.log(description);

    if (
      title === undefined ||
      description === undefined ||
      title === "" ||
      description === "" ||
      title === null ||
      description === null
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
            req.file.path,
          ],
        ];

        // console.log(req.body);

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
