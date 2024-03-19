require("dotenv").config();
const connectToMongoDb = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectToMongoDb(process.env.MONGODB_URL);
    await Product.deleteMany(); //to delete all and create new ...without letting it get added again
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

start();
