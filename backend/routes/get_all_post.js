const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.get("/", async (req, res) => {
  var query = "select * from posts";
  try {
    connection.query(query, function (error, results, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
          data: null,
        });
      } else {
        res.status(200).json({
          message: "Success",
          data: results,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.sqlMessage,
      data: null,
    });
  }
});

module.exports = router;
