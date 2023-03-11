const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const contactRouter = require("./routes/contactRoutes");

const PORT = process.env.PORT;

app.use("/api/contacts", contactRouter);

app.listen(PORT, () => console.log(`Server listening Port ${PORT}`));
