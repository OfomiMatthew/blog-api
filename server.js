const express = require("express");
const userRouter = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");
const commentRouter = require("./routes/comments/commentRoutes");
const categoryRouter = require("./routes/categories/categoryRoutes");

require("dotenv").config();

require("./config/dbConnect");
const app = express();

//middleware


//routes
// error handler
// listen to server

app.use(express.json())

// --------- users routes -------
app.use("/api/v1/users/", userRouter);

// --------- posts routes -------

app.use("/api/v1/posts", postRouter);

// ------------ comments routes -------------

app.use("/api/v1/comments", commentRouter);

// ---------- categories routes ------------

app.use("/api/v1/categories", categoryRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`server running on ${PORT}`));
