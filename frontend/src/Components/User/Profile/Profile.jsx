import React from 'react';

function UserProfile({ user }) {
  const renderedFavorites = user.favoriteMeals.map((favorite) => {
    return (
      <div key={favorite.id}>
        TESTING
        <div>{favorite.title}</div>
        <img
          src={favorite.image}
          alt={favorite.title}
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    );
  });

  return (
    <div>
      <div>Name: {user.name}</div>
      <img src={user.image} alt={user.name} />
      <div>Favorite Meals {user.favoriteMeals.length}:</div>
      {renderedFavorites}
    </div>
  );
}

export default UserProfile;
