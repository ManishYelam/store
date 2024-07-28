// server/config/db.js
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Store-rating'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB()
module.exports = connectDB;
