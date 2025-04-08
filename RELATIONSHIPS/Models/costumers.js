const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const costumerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Costumer", costumerSchema);

// FUNCTIONS
const findCostumer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
}

const addCost = async () => {
  let newCost = new Customer ({
    name: "Karan Arjun",
  });

  let newOrder = new Order ({
    item: "Pizza",
    price: 250
  });

  newCost.orders.push(newOrder);

  await newOrder.save();
  await newCost.save();

  console.log("Added new costumers");
}

const delCost = async () => {
  let data = await Customer.findByIdAndDelete('67f4cc5c8766d1e51fe8c23c');
  console.log(data);
}

delCost();
// addCost();
// const addCostumer = async () => {
//   let cust1 = new Customer({
//     name: "Rahul Kumar",
//   });

//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Chocolate" });

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   // console.log(result);
// };

// addCostumer();

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Samosa", price: 10 },
//     { item: "Chips", price: 20 },
//     { item: "Chocolate", price: 50 },
//     { item: "Panipuri", price: 20 },
//   ]);
//   // console.log(result);
// };

// addOrders();
// findCostumer();