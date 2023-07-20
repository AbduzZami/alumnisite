const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.get("/", async (req, res) => {
  console.log(req);
  if (
    req.query.post_id == null ||
    req.query.post_id == undefined ||
    req.query.post_id == ""
  ) {
    res.status(500).json({
      message: "post_id not provided",
      data: null,
    });
    return;
  }
  var query =
    "select posts.post_id, posts.title, posts.description, posts.image_url, posts.status, posts.created_on, users.user_id,users.user_name from posts, users where posts.user_id = users.user_id and posts.post_id = " +
    req.query.post_id;
  try {
    connection.query(query, function (error, result, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
          data: null,
        });
      } else {
        res.status(200).json({
          message: "Success",
          data: result[0],
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
