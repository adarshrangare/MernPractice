// nodejs core modules
const morgan = require("morgan");
const express = require("express"); // express library
const fs = require("fs"); // filessystem

// server creation
const app = express();

// built-in middlewares:
app.use(morgan("dev")); // logs
app.use(express.json()); // body_parser -> converts JSON data

// router
const userRouter = require("./routes/users");

// routes
app.use("/users", userRouter.router);

// port listeners
app.listen(8080, () => {
  console.log("Server Successfully Running On:8080");
});
