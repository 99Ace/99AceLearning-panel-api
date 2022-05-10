const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

// Set up Sessions
const session = require('express-session');
const flash = require('connect-flash');
const FileStore = require('session-file-store')(session);

// import in the CheckIfAuthenticated middleware
const { checkIfAuthenticated } = require('./middlewares');

require("dotenv").config();

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
  express.urlencoded({
    extended: false
  })
);

// set up sessions
app.use(session({
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Import in the routes
const landingRoutes = require('./routes/landing');
const authRoutes = require('./routes/auth');

app.use(flash())
// Register Flash middleware
app.use(function (req, res, next) {
  res.locals.success_messages = req.flash("success_messages");
  res.locals.error_messages = req.flash("error_messages");
  next();
});

async function main() {

  // use the routes imported
  app.use('/', landingRoutes);
  app.use('/auth', authRoutes);



  app.listen(3000, () => {
    console.log("Server has started");
  });
}

main();

