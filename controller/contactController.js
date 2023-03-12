const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all conteact
//@route GET /api/contacts/
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res
    .status(200)
    .json({ statusCode: 200, message: "Get all contacts", contacts });
});

//@desc POST  single all conteact
//@route POST /api/contacts/:id
//@access public
const createContacts = asyncHandler(async (req, res) => {
  console.log(`Request Body:`, req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All Fileds are Mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
  });
  res
    .status(201)
    .json({ statusCode: 201, message: "Create contact new contact", contact });
});

//@desc Get single conteact
//@route GET /api/contacts/:id
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  res.status(200).json({
    statusCode: 200,
    message: `Get contact ${req.params.id}`,
    contact,
  });
});

//@desc PUT all conteact
//@route PUT /api/contacts/:id
//@access public
const updateContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    statusCode: 200,
    message: `update contact ${req.params.id}`,
    updateContact,
  });
});
//@desc DELETE Single conteact
//@route DELETE /api/contacts/:id
//@access public
const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({
    statusCode: 200,
    message: `Delete contact ${req.params.id}`,
    contact,
  });
});
module.exports = {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
};
