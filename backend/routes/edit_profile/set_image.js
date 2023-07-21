const express = require("express");
const router = express.Router();
var connection = require("../../connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
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
        var sql = `update users set image_url= ? where user_id= ?`;
        values = [req.file.path, decoded.user_id];

        // console.log(req.body);

        connection.query(sql, values, function (error, result, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message: "Image set successfully.",
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
