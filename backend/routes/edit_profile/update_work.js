const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.patch("/", async (req, res) => {
  const work_id = req.body.work_id;
  const company = req.body.company;
  const designation = req.body.designation;
  const start_year = req.body.start_year;
  const end_year = req.body.end_year;
  const location = req.body.location;

  if (
    work_id === undefined ||
    company === undefined ||
    designation === undefined ||
    start_year === undefined ||
    end_year === undefined ||
    work_id === "" ||
    company === "" ||
    designation === "" ||
    start_year === "" ||
    end_year === "" ||
    work_id === null ||
    company === null ||
    designation === null ||
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
        var sql = `update works set company = '${company}' , designation = '${designation}' , start_year = '${start_year}', end_year = '${end_year}', location = '${location}' where works.work_id = ${work_id} and works.user_id = ${decoded.user_id}`;

        console.log(req.body);

        connection.query(sql, function (error, result, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message: "Work updated successfully",
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
