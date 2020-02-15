const passport = require("passport");
const path = require("path");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({ error: "no user found" });
    }
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
};
