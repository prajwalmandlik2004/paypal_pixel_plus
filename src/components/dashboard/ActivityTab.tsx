import React from 'react';
import { Calendar, Search } from 'lucide-react';

const ActivityTab: React.FC = () => {
  // Mock data for activity list
  const activities = [
    {
      id: 1,
      type: 'payment-sent',
      title: 'Payment to Netflix',
      amount: -14.99,
      date: '2025-04-16',
      time: '10:23 AM',
      status: 'completed',
      category: 'Entertainment',
    },
    {
      id: 2,
      type: 'payment-received',
      title: 'Payment from Sarah Johnson',
      amount: 125.00,
      date: '2025-04-15',
      time: '3:45 PM',
      status: 'completed',
      category: 'Transfers',
    },
    {
      id: 3,
      type: 'subscription',
      title: 'Adobe Creative Cloud',
      amount: -52.99,
      date: '2025-04-14',
      time: '12:00 AM',
      status: 'completed',
      category: 'Software',
    },
    {
      id: 4,
      type: 'refund',
      title: 'Refund from Amazon',
      amount: 34.27,
      date: '2025-04-13',
      time: '5:12 PM',
      status: 'completed',
      category: 'Shopping',
    },
    {
      id: 5,
      type: 'payment-sent',
      title: 'Payment to Whole Foods',
      amount: -87.45,
      date: '2025-04-12',
      time: '11:34 AM',
      status: 'completed',
      category: 'Groceries',
    },
    {
      id: 6,
      type: 'payment-sent',
      title: 'Uber Eats',
      amount: -28.75,
      date: '2025-04-11',
      time: '7:19 PM',
      status: 'completed',
      category: 'Food & Dining',
    },
    {
      id: 7,
      type: 'payment-received',
      title: 'Payment from Mike Smith',
      amount: 45.00,
      date: '2025-04-10',
      time: '9:30 AM',
      status: 'completed',
      category: 'Transfers',
    },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search transactions"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700">Last 30 days</span>
            </div>
          </div>
          
          <select
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            defaultValue="all"
          >
            <option value="all">All Categories</option>
            <option value="entertainment">Entertainment</option>
            <option value="transfers">Transfers</option>
            <option value="shopping">Shopping</option>
            <option value="food">Food & Dining</option>
            <option value="groceries">Groceries</option>
            <option value="software">Software</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0 flex-1">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                      activity.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <span className={`text-sm font-medium ${
                        activity.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {activity.amount > 0 ? '+' : '-'}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 px-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.title}
                        </p>
                        <p className={`text-sm font-medium ${
                          activity.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {activity.amount > 0 ? '+' : ''}${Math.abs(activity.amount).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-1 flex items-center">
                        <p className="text-xs text-gray-500 truncate">
                          {activity.date} • {activity.time} • {activity.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityTab;