const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  setUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// GET all Users and Get and Create a User
router.route('/').get(getUsers).post(setUser);

// Get, Update and Delete a User by ID
router.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
