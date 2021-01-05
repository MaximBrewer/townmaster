import React from 'react';
import AuthNav from '../components/auth-nav';
import GuestNav from '../components/guest-nav';
import { useAuth } from '../context/auth';

function NotFound () {
  let { authenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">

      { authenticated ? <AuthNav /> : <GuestNav /> }

      <div className="flex flex-col flex-1 items-center">
        <h1 className="py-8">Страницы не найдена.</h1>
      </div>
    </div>
  );
};

export default NotFound;
