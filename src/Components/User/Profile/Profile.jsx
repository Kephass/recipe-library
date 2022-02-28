import React from 'react';

function UserProfile({ user }) {
  const renderedFavorites = user.favoriteMeals.map((favorite) => {
    return (
      <div key={favorite.id}>
        <div>{favorite.title}</div>
        <img src={favorite.image} style={{ width: '100px', height: '100px' }} />
      </div>
    );
  });

  return (
    <div>
      <div>Name: {user.name}</div>
      <img src={user.image} />
      <div>Favorite Meals:</div>
      {renderedFavorites}
    </div>
  );
}

export default UserProfile;
