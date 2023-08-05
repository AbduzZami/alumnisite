const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.post("/", async (req, res) => {
  try {
    const user_id = req.body.user_id;
    const category = req.body.category;
    const email = req.body.email;

    if (
      user_id === undefined ||
      category === undefined ||
      email === undefined ||
      user_id === "" ||
      category === "" ||
      email === "" ||
      user_id === null ||
      category === null ||
      email === null
    ) {
      res.status(500).json({
        message: "Invalid request",
      });
      return;
    }
    const token = req.cookies.access_token_admin;
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
              var sql = `insert into emails ( user_id, category, email ) values  ?`;

              var values = [[user_id, category, email]];

              console.log(req.body);

              connection.query(sql, [values], function (error, result, fields) {
                if (error) {
                  res.status(500).json({
                    message: error.sqlMessage,
                  });
                } else {
                  res.status(200).json({
                    message: "Email added successfully",
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
