require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const error = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");
// const detailRoute = require("./routes/detailRoute");
const commentRoute = require("./routes/commentRoute");
const columnRoute = require("./routes/columnRoute");

const authRoute = require("./routes/authRoute");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
// app.use("/detail", authenticate, detailRoute);
app.use("/column", authenticate, columnRoute);
app.use("/comment", authenticate, commentRoute);
// app.use("/detail", authenticate, detailRoute);

app.use(notFound);
app.use(error);

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server on port", port));
