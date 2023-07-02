const express = require("express");
const router = express.Router();
var connection = require("../../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  if (
    req.body.user_name === undefined ||
    req.body.password === undefined ||
    req.body.user_name === "" ||
    req.body.password === "" ||
    req.body.user_name === null ||
    req.body.password === null
  ) {
    res.status(500).json({
      message: "Invalid request",
    });
    return;
  }
  try {
    connection.query(
      `select * from admins where user_name = '${req.body.user_name}'`,
      function (error, results, fields) {
        if (error) {
          res.status(500).send("Internal server error" + error);
        } else if (results.length === 0) {
          res.status(401).json({
            message: "Invalid email or password",
          });
        } else {
          const isMatched = bcrypt.compareSync(
            req.body.password,
            results[0].password
          );
          if (isMatched) {
            const token = jwt.sign(
              {
                admin_id: results[0].admin_id,
                user_name: results[0].user_name,
                // password: results[0].password,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "7d",
              }
            );

            const { password, ...rest } = results[0];
            res
              .cookie("access_token", token, {
                httpOnly: true,
              })
              .status(200)
              .json({
                message: "Login Success",
                data: rest,
              });
          } else {
            res.status(401).json({
              message: "Invalid Password",
            });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error" + error);
  }
});

module.exports = router;
