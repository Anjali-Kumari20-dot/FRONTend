const express = require("express");
const app = express();

// console.log(app);

let port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul> <li>Mango</li> <li>Banana</li> </ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("Hello, I am root");
});
// app.get("/mango", (req, res) => {
//     res.send("You contacted mango path");
// });
// app.get("/banana", (req, res) => {
//     res.send("You contacted banana path");
// });
// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        console.log("No search query")
    }
    res.send(`Search results for query : ${q}`);
})