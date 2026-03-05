import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('tb_token');
    const storedUser = localStorage.getItem('tb_user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }, [token]);

  const login = async (email, password) => {
    const response = await axios.post('/api/auth/login', { email, password });
    const data = response.data;
    const userInfo = {
      id: data.userId,
      fullName: data.fullName,
      email: data.email,
      roles: data.roles,
    };
    setToken(data.token);
    setUser(userInfo);
    localStorage.setItem('tb_token', data.token);
    localStorage.setItem('tb_user', JSON.stringify(userInfo));
  };

  const register = async ({ fullName, email, password, role }) => {
    const response = await axios.post('/api/auth/register', {
      fullName,
      email,
      password,
      role,
    });
    const data = response.data;
    const userInfo = {
      id: data.userId,
      fullName: data.fullName,
      email: data.email,
      roles: data.roles,
    };
    setToken(data.token);
    setUser(userInfo);
    localStorage.setItem('tb_token', data.token);
    localStorage.setItem('tb_user', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('tb_token');
    localStorage.removeItem('tb_user');
  };

  const hasRole = (role) => {
    if (!user || !user.roles) return false;
    return user.roles.includes(role);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, login, register, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

