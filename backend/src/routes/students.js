const express = require("express");
const router = express.Router();

let students = [];

// daftar siswa
router.post("/", (req, res) => {
  const newStudent = { id: Date.now().toString(), ...req.body, status: "pending" };
  students.push(newStudent);
  res.json(newStudent);
});

// lihat daftar siswa
router.get("/", (req, res) => {
  res.json(students);
});

module.exports = router;
