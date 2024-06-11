// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';  // Ensure the path is correct

/**
 * Custom hook for accessing authentication context.
 * Uses React's useContext to tap into the provided AuthContext from AuthProvider.
 * 
 * @returns {AuthContextType} The authentication context which includes the user's authentication status and token.
 * @throws {Error} Throws an error if used outside of an AuthProvider to ensure proper usage within context boundaries.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Check if the context is not defined, which would mean useAuth is being used outside of an AuthProvider.
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
