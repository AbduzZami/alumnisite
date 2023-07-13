const express = require("express");
const router = express.Router();
var connection = require("../connection.js");
const jwt = require("jsonwebtoken");

router.get("/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  try {
    var query = `select * from (select users.user_id,users.user_name,users.email, users.roll_no, users.verification_status, user_headline.headline from users left join user_headline on users.user_id = user_headline.user_id) as users where users.user_id = ${user_id}`;

    connection.query(query, function (error, user, fields) {
      if (error) {
        res.status(500).json({
          message: error.sqlMessage,
          data: null,
        });
      } else {
        // WORKS
        var query = `select * from works where works.user_id = ${user_id}`;
        connection.query(query, function (error, works, fields) {
          if (error) {
            res.status(500).json({
              message: error.sqlMessage,
              data: null,
            });
          } else {
            // EDUCATION
            var query = `select * from educations where educations.user_id = ${user_id}`;
            connection.query(query, function (error, educations, fields) {
              if (error) {
                res.status(500).json({
                  message: error.sqlMessage,
                  data: null,
                });
              } else {
                // SOCIALS
                var query = `select * from socials where socials.user_id = ${user_id}`;
                connection.query(query, function (error, socials, fields) {
                  if (error) {
                    res.status(500).json({
                      message: error.sqlMessage,
                      data: null,
                    });
                  } else {
                    // PHONES
                    var query = `select works.work_id, works.company, works.designation, works.start_year, works.end_year from works where works.user_id = ${user_id}`;
                    connection.query(query, function (error, phones, fields) {
                      if (error) {
                        res.status(500).json({
                          message: error.sqlMessage,
                          data: null,
                        });
                      } else {
                        // EMAILS
                        var query = `select works.work_id, works.company, works.designation, works.start_year, works.end_year from works where works.user_id = ${user_id}`;
                        connection.query(
                          query,
                          function (error, emails, fields) {
                            if (error) {
                              res.status(500).json({
                                message: error.sqlMessage,
                                data: null,
                              });
                            } else {
                              // EMAILS
                              res.status(200).json({
                                message: "Success",
                                data: {
                                  user: user[0],
                                  works,
                                  educations,
                                  socials,
                                  phones,
                                  emails,
                                },
                              });
                            }
                          }
                        );
                      }
                    });
                  }
                });
              }
            });
          }
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
