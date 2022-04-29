var express = require("express");
var router = express.Router();

let hairdresser = [
  { id: 1, name: "Sara", surname: "Smith", email: "sara-smith@gmail.com" },
  { id: 2, name: "John", surname: "Doe", email: "john-doe@gmail.com" },
  { id: 3, name: "Jane", surname: "Doe", email: "jane-doe@gmail.com" },
];

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // is there a user with this email?
  // if not, send back an error
  // if so, check the password
  // and it should be added to the list of logged in users

  return res.json({
    email: email,
    password: password,
  });
});

router.get("/hairdressers", (req, res, next) => {
  return res.json(hairdresser);
});

router.post("/register", () => (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // insert user with username and password in database

  return res.json({
    message: "Success",
  });
});

module.exports = router;
