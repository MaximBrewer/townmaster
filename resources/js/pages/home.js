import React from 'react';
import GuestNav from '../components/guest-nav';

function Home () {
  return (
    <div className="flex flex-col min-h-screen">
      <GuestNav />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-indigo text-2xl p-2 font-thin uppercase"> Town Master</h1>
        <div className="flex items-center">
        </div>
      </div>
    </div>
  );
};

export default Home;
