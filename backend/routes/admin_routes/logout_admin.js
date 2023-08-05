const express = require("express");
const router = express.Router();

// Your other required modules and configurations

// Logout API route
router.post("/", (req, res) => {
  try {
    // Clear the access_token cookie to log the user out
    res.clearCookie("access_token_admin").status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error" + error);
  }
});

module.exports = router;
