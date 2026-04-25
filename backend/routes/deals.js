const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { lead_id, property_id, commission } = req.body;

  db.query(
    "INSERT INTO deals (lead_id, property_id, stage, commission) VALUES (?, ?, 'Negotiation', ?)",
    [lead_id, property_id, commission],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Deal created");
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM deals", (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
});

module.exports = router;
