//** */

const express = require("express");
const path = require("path");
const connectDB = require("./config/connectDB");
require("dotenv").config();
//************************** *
const app = express();
//************************** */
connectDB();
//************************** */
//router
app.use(express.json());
app.use("/api/user", require("./router/user"));
app.use("/api/topic", require("./router/TopicList"));
app.use("/api/forum", require("./router/Post"));
// app.use("/", require("./router/user"));
//************************** */

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT=${PORT}`)
);
