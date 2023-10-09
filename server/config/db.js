const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);

  console.log(`MongoDb Connection Established`);
};

module.exports = connectDB;
