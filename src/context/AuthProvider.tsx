// src/context/AuthProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from './AuthContextType';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(Boolean(token));
  const [isInitializing, setIsInitializing] = useState(true); // New state to track initialization

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
    setIsInitializing(false); // Set initializing to false after checking token
  }, [token]);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, isInitializing }}>
      {children}
    </AuthContext.Provider>
  );
};
