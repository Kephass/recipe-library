import React from 'react';
import { useNavigate } from 'react-router-dom';

function Recipes() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="recipes mb-9  text-center">
        <h1>Here are some recipes</h1>
        <button
          className="bg-green-500 rounded p-2"
          onClick={() => navigate('/')}
        >
          back home
        </button>
      </div>
    </div>
  );
}

export default Recipes;
