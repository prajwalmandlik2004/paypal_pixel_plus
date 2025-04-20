import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

const OverviewTab: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const transactionHistory = [
    { id: 1, description: 'Spotify Premium', amount: -9.99, date: '2025-04-15', type: 'subscription' },
    { id: 2, description: 'Airbnb Booking', amount: -340.00, date: '2025-04-12', type: 'travel' },
    { id: 3, description: 'Payment from John Doe', amount: 54.40, date: '2025-04-10', type: 'payment' },
    { id: 4, description: 'Amazon.com', amount: -67.23, date: '2025-04-08', type: 'shopping' },
    { id: 5, description: 'Uber Ride', amount: -12.50, date: '2025-04-05', type: 'transportation' },
  ];

  const stats = [
    { label: 'Total Spent', value: 429.72, change: '+15.3%', icon: ArrowUpRight, color: 'text-red-500' },
    { label: 'Total Received', value: 54.40, change: '-22.1%', icon: ArrowDownRight, color: 'text-green-500' },
    { label: 'Pending', value: 0.00, change: '0%', icon: Wallet, color: 'text-blue-500' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">${stat.value.toFixed(2)}</p>
              </div>
              <div className={`p-2 rounded-full ${stat.label === 'Total Spent' ? 'bg-red-100' : stat.label === 'Total Received' ? 'bg-green-100' : 'bg-blue-100'}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <div className={`mt-2 text-sm ${stat.color}`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {transactionHistory.map((transaction) => (
            <div key={transaction.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${
                  transaction.amount < 0 ? 'bg-red-100' : 'bg-green-100'
                } mr-4`}>
                  {transaction.amount < 0 ? (
                    <ArrowUpRight className="h-5 w-5 text-red-500" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className={`font-medium ${
                transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
              }`}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;