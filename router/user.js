const express = require("express");
const { validationResult } = require("express-validator");
const {
  Register,
  login,
  getAllUsers,
  deleteUser,
  getUser,
  editUser,
} = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
  registerValidate,
  validation,
  loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

//Register
router.post("/register", registerValidate(), validation, Register);
router.post("/login", loginValidate(), validation, login);

router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});

//get all user
router.get("/admin/users", getAllUsers);

//delete contact
router.delete("/admin/users/:id", deleteUser);

router.get("/admin/users/:id", getUser);
//UPDATE USER
router.put("/editprofile", isAuth, editUser);

module.exports = router;
