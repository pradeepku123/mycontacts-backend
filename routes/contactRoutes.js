const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
router.post("/", (req, res) => {
  res.status(201).json({ message: "Create contact new contact" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
});

module.exports = router;
