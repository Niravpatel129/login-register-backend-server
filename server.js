const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("./models/Users");
require("./services/passport");
app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
