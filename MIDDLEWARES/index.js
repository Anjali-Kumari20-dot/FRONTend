const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use( (req, res, next) => {
//     console.log("Hi, I am middleware");
//     next();
// });
// app.use( (req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

// CREATING UTILITY MIDDLEWARES
// logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
  res.send(err);
});
app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.get("/admin",(req, res) => {
    throw new ExpressError(403, "Access is forbidden");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.listen(8080, () => {
  console.log("Server listening");
});
