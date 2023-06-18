const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    res
      .cookie("access_token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .status(200)
      .json({
        message: "Logout Success",
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error" + error);
  }
});

module.exports = router;
