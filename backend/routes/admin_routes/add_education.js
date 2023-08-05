const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.post("/", async (req, res) => {
  try {
    const { user_id, institute, degree, start_year, end_year, location } =
      req.body;

    if (
      user_id === undefined ||
      user_id === "" ||
      user_id === null ||
      institute === undefined ||
      degree === undefined ||
      start_year === undefined ||
      end_year === undefined ||
      institute === "" ||
      degree === "" ||
      start_year === "" ||
      end_year === "" ||
      institute === null ||
      degree === null ||
      start_year === null ||
      end_year === null ||
      location === undefined ||
      location === "" ||
      location === null
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
              var sql = `insert into educations ( user_id, institute, degree, start_year, end_year, location ) values ?`;

              var values = [
                [
                  req.body.user_id,
                  req.body.institute,
                  req.body.degree,
                  req.body.start_year,
                  req.body.end_year,
                  req.body.location,
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
                    message: "Education added successfully",
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
