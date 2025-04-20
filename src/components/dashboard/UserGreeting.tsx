import React from 'react';

const UserGreeting: React.FC = () => {
  // Mock user data - in a real app, this would come from an auth context or API
  const user = {
    firstName: 'Alex',
    lastName: 'Morgan',
    lastLogin: '2 hours ago',
    balance: 2547.89,
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Welcome back, {user.firstName}!
        </h1>
        <p className="text-gray-500 mt-1">Last login: {user.lastLogin}</p>
      </div>
      
      <div className="mt-4 md:mt-0 bg-white rounded-lg shadow-md p-4">
        <p className="text-sm text-gray-500">Available Balance</p>
        <p className="text-2xl font-bold text-gray-900">${user.balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default UserGreeting;