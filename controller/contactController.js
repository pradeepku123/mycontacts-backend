//@desc Get all conteact
//@route GET /api/contacts/
//@access public
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc POST  single all conteact
//@route POST /api/contacts/:id
//@access public
const createContacts = (req, res) => {
  res.status(201).json({ message: "Create contact new contact" });
};

//@desc Get single conteact
//@route GET /api/contacts/:id
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: `Get contact ${req.params.id}` });
};

//@desc PUT all conteact
//@route PUT /api/contacts/:id
//@access public
const updateContacts = (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
};
//@desc DELETE Single conteact
//@route DELETE /api/contacts/:id
//@access public
const deleteContacts = (req, res) => {
  res.status(200).json({ message: `Delete contact ${req.params.id}` });
};
module.exports = {
  getAllContacts,
  createContacts,
  getContacts,
  updateContacts,
  deleteContacts,
};
