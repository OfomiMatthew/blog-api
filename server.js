const express = require("express");
require("dotenv").config();

require("./config/dbConnect");
const app = express();

//middleware
//routes
// error handler
// listen to server

// users routes
app.post("/api/v1/users/register", async () => {
  try {
    res.json({
      status: "success",
      data: "User registered",
    });
  } catch (e) {
    res.json(e.message);
  }
});


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`server running on ${PORT}`));
