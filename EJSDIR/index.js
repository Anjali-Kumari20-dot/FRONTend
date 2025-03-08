const express = require("express");
const { Http2ServerRequest } = require("http2");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal =  Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", { num: diceVal});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "bob", "steve", "Denny"];
    // let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    res.render("instagram.ejs", {username});
})

// Conditional statements in ejs

