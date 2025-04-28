require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const { auth } = require('./middleware/auth');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', auth, userRoutes);
app.use('/api/todo', auth, todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
