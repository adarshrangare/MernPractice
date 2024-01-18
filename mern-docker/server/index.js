// nodejs core modules
const express = require("express"); // express library
const fs = require("fs"); // filessystem

// server creation
const app = express();

// router
const userRouter = require("./routes/users");

// routes
app.use("/users", userRouter.router);

// port listeners
app.listen(8080, () => {
  console.log("Server Successfully Running On:8080");
});
