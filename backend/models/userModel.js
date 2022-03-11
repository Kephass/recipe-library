const mongoose = require('mongoose');

// Defines the shape of a User model
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a user name'],
    },
    image: {
      type: String,
      required: false,
    },
    // TODO: This will be an array of ObjectID references (they will refer to Recipe models we will soon define)
    favoriteMeals: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Recipe',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
