// mongoose ke jo models hote hai whi hamare liye database ke andr collections bnte hai

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    maxLength: 500,
  },
  created_at: {
    type: Date,
    required: true
  },
  updated_at: { // Khud se banana hai #HW
    type: Date,
    required: true
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
