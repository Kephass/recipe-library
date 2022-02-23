import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="buttons mx-auto text-center p-5">
      <Link
        to="/test"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test
      </Link>
      <Link
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/recipes"
      >
        Recipes
      </Link>
    </nav>
  );
}

export default Navigation;
