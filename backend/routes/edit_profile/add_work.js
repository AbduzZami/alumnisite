const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.post("/", async (req, res) => {
  const company = req.body.company;
  const designation = req.body.designation;
  const start_year = req.body.start_year;
  const end_year = req.body.end_year;
  const location = req.body.location;

  if (
    company === undefined ||
    designation === undefined ||
    start_year === undefined ||
    end_year === undefined ||
    company === "" ||
    designation === "" ||
    start_year === "" ||
    end_year === "" ||
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
        var sql = `insert into works ( user_id, company, designation, start_year, end_year, location ) values ?`;

        var values = [
          [
            decoded.user_id,
            req.body.company,
            req.body.designation,
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
              message: "Work added successfully",
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
