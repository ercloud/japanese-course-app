const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

// dummy login (ganti dengan DB)
router.post("/login", async (req, res) => {
  const { nik, password } = req.body;
  if (nik === "admin" && password === "Admin123!") {
    const token = jwt.sign({ role: "admin", nik }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token, role: "admin" });
  }
  if (nik === "superadmin" && password === "Superadmin123!") {
    const token = jwt.sign({ role: "superadmin", nik }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token, role: "superadmin" });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
