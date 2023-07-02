const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.post("/", async (req, res) => {
  const institute = req.body.institute;
  const degree = req.body.degree;
  const start_year = req.body.start_year;
  const end_year = req.body.end_year;

  if (
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
    end_year === null
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
        var sql = `insert into educations ( user_id, institute, degree, start_year, end_year ) values ?`;

        var values = [
          [
            decoded.user_id,
            req.body.institute,
            req.body.degree,
            req.body.start_year,
            req.body.end_year,
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
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.sqlMessage,
    });
  }
});

module.exports = router;
