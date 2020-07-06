const mongoose = require("mongoose");

// Express server
const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const passport = require("passport");


// Routes
const users = require("./routes/api/users"); 
const habits = require("./routes/api/habits")
// Grab the mongo uri
const db = require("./config/keys").mongoURI;

// Initialize mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// Set up middleware
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Initialize routes
app.use("/api/users", users);
app.use("/api/habits", habits);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${ port }`));
