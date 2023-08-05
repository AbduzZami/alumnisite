const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.get("/", async (req, res) => {
  const isApproved = req.query.isapproved ?? false;
  var query =
    isApproved == false
      ? "select * from posts ORDER BY created_on DESC"
      : "select * from posts where status = 'approved' ORDER BY created_on DESC";
  const limit = req.query.limit;
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
          data:
            req.query.limit != null || req.query.limit != undefined
              ? results.slice(0, limit)
              : results,
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
