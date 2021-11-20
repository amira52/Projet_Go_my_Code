const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user.role == "admin") {
    next();
  } else {
    return res.status(401).send({ msg: "you are not authorized" });
  }
};
module.exports = isAdmin;
