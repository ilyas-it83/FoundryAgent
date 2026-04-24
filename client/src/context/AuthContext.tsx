import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user on mount
    const checkAuth = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/api/auth/me');
        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser(res.data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/register', { username, email, password });
      setUser(res.data.user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    axios.post('/api/auth/logout'); // optional, for future enhancement
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
