import mongoose, { ConnectOptions } from 'mongoose';
 // DB Configruation
const connectDB = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect('mongodb://127.0.0.1/my-node-app', options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connectDB;
