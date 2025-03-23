// STEP 1
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// STEP 6
const Chat = require("./models/chat.js");

// STEP 4
main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

// STEP 3
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// STEP 5
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

// NEW ROUTE
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// CREATE ROUTE
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("Chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// EDIT ROUTE
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

// UPDATE ROUTE
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// DELETE ROUTE
app.delete("/chats/:id", async (req, res) => {
  let {id} = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
})

//  STEP 2
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("root is working");
});
