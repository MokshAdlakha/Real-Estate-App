const express = require("express");
const router = express.Router();
const db = require("../db");
const axios = require("axios");

router.post("/", (req, res) => {
  const { name, phone, email, budget } = req.body;

  db.query(
    "INSERT INTO leads (name, phone, email, budget, status) VALUES (?, ?, ?, ?, 'New')",
    [name, phone, email, budget],
    async (err) => {
      if (err) return res.status(500).send(err);

      await axios.post("https://agnayi2026.app.n8n.cloud/webhook/e4bc425e-bbf8-470d-9baa-94c19e3a621c", req.body);

      res.send("Lead added");
    }
  );
});

router.get("/", (req, res) => {
  db.query("SELECT * FROM leads", (err, data) => {
    if (err) return res.status(500).send(err);
    res.json(data);
  });
});

module.exports = router;
