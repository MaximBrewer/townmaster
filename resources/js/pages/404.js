import React from 'react';
import GuestNav from '../components/guest-nav';
import { useAuth } from '../context/auth';

function NotFound () {
  let { authenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <GuestNav />
      <div className="flex flex-col flex-1 items-center">
        <h1 className="py-8">Страницы не найдена.</h1>
      </div>
    </div>
  );
};

export default NotFound;
