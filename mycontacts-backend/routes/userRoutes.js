const express = require("express");
const router = express.Router();

const { registerUser, loginUser ,currentUser} = require("../controllers/userController");
const ValidateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current",ValidateToken, currentUser)

module.exports = router;