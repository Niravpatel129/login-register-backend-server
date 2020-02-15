const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    if (req.user) res.send({ success: "logged out" });
  });

  app.get("/api/current_user", (req, res) => {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({ error: "no user found" });
    }
  });

  app.get("/", (req, res) => {
    res.send("Helo!");
  });
};
