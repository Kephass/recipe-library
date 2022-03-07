const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc Get Users
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc Get User
// @route GET /api/users/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});

// @desc Set user
// @route POST /api/users
// @access Private
const setUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('Please provide appropriate user information');
  }

  const { name, image, favoriteMeals } = req.body;
  const user = await User.create({ name, image, favoriteMeals });
  res.status(200).json(user);
});

// @desc Update User
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;
  const user = await User.findById(userId);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  // Pass in options with key of "new" set to true -- so we create the document if it does not exist
  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @desc Delete User
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  await user.remove();

  res.status(200).json({ id: userId });
});

module.exports = {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
};
