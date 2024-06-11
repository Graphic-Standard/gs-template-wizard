// src/context/AuthContextType.ts
export interface AuthContextType {
  isAuthenticated: boolean;
  isInitializing: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}
