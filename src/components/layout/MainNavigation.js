import React from 'react';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { path: '/', text: 'Home' },
  { path: '/all-recipes', text: 'All recipes' },
];

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          {navigationLinks.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
