const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.get("/", async (req, res) => {
  try {
    connection.query("select * from user", function (error, results, fields) {
      if (error) {
        res.status(500).send("Internal server error");
      } else {
        res.status(200).json({
          message: "Success",
          data: results,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
