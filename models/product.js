const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  phone_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // enum: {
    //   values: ["apple", "dell", "samsung", "mi"],
    //   message: "{VALUE} is not supported",
    // },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
