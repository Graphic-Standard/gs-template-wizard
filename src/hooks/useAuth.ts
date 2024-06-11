// Import necessary items from React and your context file
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';  // Adjust the import path as needed based on your project structure

/**
 * Custom hook for accessing authentication context.
 * @returns The authentication context including user's authentication status and token.
 * @throws Error if the hook is used outside of an AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  // Ensure the context is not undefined, which would indicate that this hook is used outside of an AuthProvider
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
