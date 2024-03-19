const mongoose = require("mongoose");

// async function connectToMongoDb(url) {
//   return mongoose.connect(url);
// }
const connectToMongoDb = async (url) => {
  try {
    await mongoose.connect(url, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    // console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Optionally, you can throw the error to propagate it to the caller
    throw error;
  }
};

module.exports = connectToMongoDb;
