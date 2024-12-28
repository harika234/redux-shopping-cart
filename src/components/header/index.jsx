import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-4">
        <Link to={"/"}>
          <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            REACT REDUX SHOPPING CART
          </h1>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={'/'}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
