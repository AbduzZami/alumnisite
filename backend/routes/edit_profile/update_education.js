const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.patch("/", async (req, res) => {
  const edu_id = req.body.edu_id;
  const institute = req.body.institute;
  const degree = req.body.degree;
  const start_year = req.body.start_year;
  const end_year = req.body.end_year;
  const location = req.body.location;

  if (
    edu_id === undefined ||
    institute === undefined ||
    degree === undefined ||
    start_year === undefined ||
    end_year === undefined ||
    edu_id === "" ||
    institute === "" ||
    degree === "" ||
    start_year === "" ||
    end_year === "" ||
    edu_id === null ||
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
        var sql = `update educations set institute = '${institute}' , degree = '${degree}' , start_year = '${start_year}', end_year = '${end_year}', location = '${location}' where educations.edu_id = ${edu_id} and educations.user_id = ${decoded.user_id}`;

        console.log(req.body);

        connection.query(sql, function (error, result, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message: "Education updated successfully",
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
