const express = require("express");
const app = express();
const cors = require("cors");

// Port setup and Models sync
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

// Connection to Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Heroku static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Requiring our routes
app.use(routes);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true //allow session cookie to pass through
  })
);
app.use(express.static("public"));

// Connection to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/saliva_db",
    { useNewUrlParser: true,
      useFindAndMondify: false,
      useCreateIndex: true,
      useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
