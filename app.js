const mongoose = require("mongoose");

// Express server
const express = require("express");
const app = express();

// Middleware
const bodyParser = require("body-parser");
const passport = require("passport");

// Routes
const tasks = require("./routes/api/tasks");
const users = require("./routes/api/users"); 

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

app.use(function(req, res, next) {
  console.log(req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
  Object.keys(req.headers).forEach(function(field) {
    console.log(field + ': ' + req.headers[field])
  });
  console.dir(req.body);

  next();
});

// Initialize routes
app.use("/api/tasks", tasks);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${ port }`));
