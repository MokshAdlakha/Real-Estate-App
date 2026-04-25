const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { title, location, price } = req.body;

  db.query(
    "INSERT INTO properties (title, location, price, status) VALUES (?, ?, ?, 'Available')",
    [title, location, price],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Property added");
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM properties", (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
});

module.exports = router;
