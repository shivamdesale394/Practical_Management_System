import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // This loads variables from .env into process.env

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
      throw new Error('MONGODB_URL is undefined');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error(`Connection Failed: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
