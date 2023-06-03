import express, { Application } from 'express';
import taskRoutes from './routes/TaskRoutes';
import connectDB from './config/mongoConfig';

const app: Application = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', taskRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
