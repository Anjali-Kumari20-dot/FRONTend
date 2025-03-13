const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// app.use(express.urlencoded({extended: true }));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
let posts = [
    {
        username : "Apna College",
        content : "I love coding",
    },
    {
        username : "Anjali Kumari",
        content : "Happy Journey to full stack Development",
    },
    {
        username : "Shivam",
        content : "Hard work is important to achieve success",
    }
];

// Simple sa kaam hai taaki hame pata chal jaye saari chije ekdm thik thik kaam kar rhi hai
app.get("/posts", (req, res) => {
    // res.render("index.ejs");
    res.render('index', { posts: posts }); // mera ejs aise kaam krta hai
})

app.listen(port, () => {
    console.log("Listening to port : 8080");
});

