require("dotenv").config();
const express = require("express");
const products_routes = require("./routes/products");

const app = express();
const connectToMongoDb = require("./db/connect");

const PORT = process.env.PORT || 8000;

connectToMongoDb(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    // Handle the error gracefully or exit the application
    process.exit(1);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HEY ,I am live");
});

//middleware or to set route

app.use("/api/products", products_routes);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
