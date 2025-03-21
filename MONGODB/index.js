const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOne({ _id: "67db0d4d297b5b2a7e760206" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//--------------------------- UPDATE -----------------------------------------------
// User.updateOne({ name: "Tony" }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 48 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Anjali" }, { age: 17 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//-------------------------------------- DELETE -------------------------------------------------
// User.deleteOne({ name: "Chandan" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndDelete("67dcfb38cea259b1118e0c6b")
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})


// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User(
//     {
//         name: "Anjali",
//         email: "anjali@gmail.com",
//         age: 20,
//     }
// );

// const user2 = new User(
//     {
//         name: "Chandan",
//         email: "chandan@yahoo.in",
//         age:21,
//     }
// );

// user1
//     .save()
//     .then(res => {
//         console.log(res);
//     });

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Hania", email: "hania@gmail.com", age: 35},
//     {name: "roshii", email: "roshii@gmail.com", age: 24},
// ]).then((res) => {
//     console.log(res);
// })
