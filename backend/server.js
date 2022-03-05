const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const userRouter = require('./routes/userRoutes');
const recipeRouter = require('./routes/recipeRoutes');

const app = express();

// Required to parse the body of a request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use our routers
app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);

// Use a custom error handler middleware to replace Express' default
// It's important this comes after our routers!
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
