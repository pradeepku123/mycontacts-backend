const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const contactRouter = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/contacts", contactRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening Port ${PORT}`));
