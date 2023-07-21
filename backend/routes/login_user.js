const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    connection.query(
      `select users.user_id, users.user_name, users.email, users.password, users.roll_no, users.verification_status, users.image_url from users where email = '${req.body.email}'`,
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
                user_id: results[0].user_id,
                user_name: results[0].user_name,
                email: results[0].email,
                roll_no: results[0].roll_no,
                image_url: results[0].image_url,
                verification_status: results[0].verification_status,
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
