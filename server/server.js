// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// MongoDB connection
connectDB();

app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const voteRoutes = require('./routes/voteRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use('/api/users', userRoutes);
app.use('/api/votes', voteRoutes);
app.use('/api/candidates', candidateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
