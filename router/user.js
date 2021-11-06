const express = require("express");
const { validationResult } = require("express-validator");
//const { getAllUsers } = require("../client/src/JS/actions/user");
const { Register, login,getAllUsers } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const { registerValidate, validation, loginValidate } = require("../middleware/validateUser");

const router = express.Router();

//Register
router.post("/register", registerValidate(),validation, Register);
router.post("/login",loginValidate(),validation, login);

router.get("/current", isAuth, (req, res) => {
    res.send({ user: req.user })
});
//get all user

//Get (All contact) methode
router.get("/admin/users", getAllUsers);


module.exports = router;