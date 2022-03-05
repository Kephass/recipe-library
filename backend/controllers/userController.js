const asyncHandler = require('express-async-handler');

const mockUserData = {
  id: 1,
  name: 'Davor',
  image:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  favoriteMeals: [
    {
      id: 1,
      title: 'Placeholder Cheese Pizza',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      difficulty: 3,
      timeToPrepare: 40,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Placeholder Burger & Fries',
      image:
        'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
      difficulty: 3,
      timeToPrepare: 40,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Placeholder Some Fancy Icecream Thingy',
      image:
        'https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      difficulty: 3,
      timeToPrepare: 40,
      rating: 4.1,
    },
  ],
};

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
  res.status(200).json({
    message: `GET User ${req.params.id}`,
    user: mockUserData,
  });
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
