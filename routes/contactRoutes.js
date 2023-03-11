const express = require("express");

const router = express.Router();

const {
  getAllContacts,
  getContacts,
  createContacts,
  updateContacts,
  deleteContacts,
} = require("./../controller/contactController");

router.get("/", getAllContacts).post("/", createContacts);
router
  .get("/:id", getContacts)
  .put("/:id", updateContacts)
  .delete("/:id", deleteContacts);

module.exports = router;
