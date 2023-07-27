// SELECT DISTINCT u.user_id, u.user_name, u.email, u.roll_no, u.verification_status, u.image_url FROM users u LEFT JOIN user_headline h ON u.user_id = h.user_id LEFT JOIN socials s ON u.user_id = s.user_id LEFT JOIN phones p ON u.user_id = p.user_id LEFT JOIN emails e ON u.user_id = e.user_id LEFT JOIN works w ON u.user_id = w.user_id LEFT JOIN educations ed ON u.user_id = ed.user_id WHERE u.user_name LIKE '%${req.query.parameter}%' OR h.headline LIKE '%${req.query.parameter}%' OR s.category LIKE '%${req.query.parameter}%' OR s.link LIKE '%${req.query.parameter}%' OR p.category LIKE '%${req.query.parameter}%' OR p.phone_no LIKE '%${req.query.parameter}%' OR e.category LIKE '%${req.query.parameter}%' OR e.email LIKE '%${req.query.parameter}%' OR w.company LIKE '%${req.query.parameter}%' OR w.designation LIKE '%${req.query.parameter}%' OR ed.institute LIKE '%${req.query.parameter}%' OR ed.degree LIKE '%${req.query.parameter}%';

const express = require("express");
const router = express.Router();
var connection = require("../connection.js");

router.get("/", async (req, res) => {
  var query = `SELECT DISTINCT u.user_id, u.user_name, u.email, u.roll_no, u.verification_status, u.image_url, h.headline FROM users u LEFT JOIN user_headline h ON u.user_id = h.user_id LEFT JOIN socials s ON u.user_id = s.user_id LEFT JOIN phones p ON u.user_id = p.user_id LEFT JOIN emails e ON u.user_id = e.user_id LEFT JOIN works w ON u.user_id = w.user_id LEFT JOIN educations ed ON u.user_id = ed.user_id WHERE u.user_name LIKE '%${req.query.parameter}%' OR h.headline LIKE '%${req.query.parameter}%' OR s.category LIKE '%${req.query.parameter}%' OR s.link LIKE '%${req.query.parameter}%' OR p.category LIKE '%${req.query.parameter}%' OR p.phone_no LIKE '%${req.query.parameter}%' OR e.category LIKE '%${req.query.parameter}%' OR e.email LIKE '%${req.query.parameter}%' OR w.company LIKE '%${req.query.parameter}%' OR w.designation LIKE '%${req.query.parameter}%' OR ed.institute LIKE '%${req.query.parameter}%' OR ed.degree LIKE '%${req.query.parameter}%';`;
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
