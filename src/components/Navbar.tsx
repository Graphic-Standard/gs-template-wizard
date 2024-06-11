import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * Navigation bar that changes its content based on user authentication status.
 * Displays links to various parts of the application and a logout button.
 */
const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Potentially push to login route if not automatically handled by the app's routing logic
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {isAuthenticated ? (
          <div className="flex gap-4">
            <Link to="/companies" className="hover:text-gray-300">Companies</Link>
            <Link to="/wizard" className="hover:text-gray-300">Wizard</Link>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
