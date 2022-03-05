const asyncHandler = require('express-async-handler');

// @desc Get Users
// @route GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'GET Users' });
});

// @desc Get User
// @route GET /api/users/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `GET User ${req.params.id}` });
});

// @desc Set user
// @route POST /api/users
// @access Private
const setUser = asyncHandler(async (req, res) => {
  if (!req.body.userInfo) {
    res.status(400);
    throw new Error('Please provide appropriate user information');
  }
  res.status(200).json({ message: 'User Created!' });
});

// @desc Update User
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// @desc Delete User
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
};
