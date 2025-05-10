
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import MainLayout from '../components/MainLayout';
import Dashboard from './Dashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default Index;
