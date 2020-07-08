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
const habits = require("./routes/api/habits");
const rewards = require("./routes/api/rewards");

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
app.use("/api/rewards", rewards);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${ port }`));
