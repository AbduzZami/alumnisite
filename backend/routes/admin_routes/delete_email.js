const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("../../connection");

router.delete("/", async (req, res) => {
  const { user_id, email_id } = req.body;

  if (
    user_id === undefined ||
    user_id === "" ||
    user_id === null ||
    email_id === undefined ||
    email_id === "" ||
    email_id === null
  ) {
    res.status(500).json({
      message: "Invalid request",
    });
    return;
  }
  try {
    const token = req.cookies.access_token_admin;
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
        var sql = `delete from emails where email_id = ${email_id} and user_id = ${user_id}`;

        // var values = [
        //   [
        //     req.body.user_id,
        //     req.body.company,
        //     req.body.designation,
        //     req.body.start_year,
        //     req.body.end_year,
        //   ],
        // ];

        console.log(req.body);

        connection.query(sql, function (error, result, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
            });
          } else {
            res.status(200).json({
              message: "Email deleted successfully",
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
