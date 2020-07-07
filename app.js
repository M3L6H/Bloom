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
<<<<<<< HEAD

=======
const habits = require("./routes/api/habits")
>>>>>>> 2bb3026ef9b1015574d3c1361b0136c7c90b1e55
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
app.use("/api/tasks", tasks);
app.use("/api/users", users);
app.use("/api/habits", habits);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${ port }`));
