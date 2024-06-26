// src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import CompaniesList from './components/CompaniesList';
import WizardPage from './components/WizardPage';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import { QueryProvider } from './context/QueryProvider';
import NavBar from './components/Navbar';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isAuthenticated, isInitializing } = useAuth();
  
    if (isInitializing) {
      return <div>Loading...</div>; // Or any other loading indicator
    }
  
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

const App: React.FC = () => {
  return (
    <AuthProvider>
      <QueryProvider>  {/* Use the QueryProvider component here */}
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<PrivateRoute><CompaniesList /></PrivateRoute>} />
            <Route path="/wizard" element={<PrivateRoute><WizardPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </AuthProvider>
  );
};

export default App;
