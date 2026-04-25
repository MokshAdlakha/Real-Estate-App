const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "123") {
    const token = jwt.sign({ role: "admin" }, "secret");
    return res.json({ token });
  }

  res.status(401).send("Invalid credentials");
});

module.exports = router;
