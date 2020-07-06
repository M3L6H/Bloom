import LoginFormContainer from './frontend/src/components/session_forms';
import LoginForm from './frontend/src/components/session_forms/login_form';
const mongoose = require("mongoose");

// Express server
const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const passport = require("passport");

// Grab the mongo uri
const db = require("./config/keys").mongoURI;

// Initialize mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));
<LoginFormContainer />
// Set up middleware
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${ port }`));
