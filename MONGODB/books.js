const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("err");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
//-------------------------- SCHEMA VALIDATIONS ----------------------
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true, // not null
    maxLength: 30,
  },
  author: {
    type: String,
    default: "Anjali Kumari",
  },
  price: {
    type: Number,
    min: [1, "Price is too low for Amazon selling"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "67dd294474e2a82528f48e74",
  { price: -100 },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

// let book1 = new Book({
//   title: "Play with mind",
//   author: "Anjali Kumari",
//   price: 1200,
// });

// let book2 = new Book({
//   title: "Gone Girl ",
//   price: "5674",
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// book2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
