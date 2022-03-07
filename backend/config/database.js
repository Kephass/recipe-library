const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${mongooseConnection.connection.host}`);
  } catch (error) {
    console.log(error);

    // Exitt he connection process with a failure flag (1)
    process.exit(1);
  }
};

module.exports = connectDatabase;
