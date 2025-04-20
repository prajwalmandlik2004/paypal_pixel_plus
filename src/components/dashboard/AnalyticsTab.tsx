import React from 'react';

const AnalyticsTab: React.FC = () => {
  // Mock spending by category data
  const spendingByCategory = [
    { category: 'Food & Dining', amount: 523.42, color: 'bg-blue-500', percentage: 28 },
    { category: 'Shopping', amount: 348.25, color: 'bg-purple-500', percentage: 19 },
    { category: 'Entertainment', amount: 275.99, color: 'bg-yellow-500', percentage: 15 },
    { category: 'Bills & Utilities', amount: 312.87, color: 'bg-green-500', percentage: 17 },
    { category: 'Transportation', amount: 195.45, color: 'bg-red-500', percentage: 11 },
    { category: 'Other', amount: 185.24, color: 'bg-gray-500', percentage: 10 },
  ];

  // Mock monthly spending data
  const monthlySpending = [
    { month: 'Jan', amount: 1250 },
    { month: 'Feb', amount: 1450 },
    { month: 'Mar', amount: 1350 },
    { month: 'Apr', amount: 1841 },
    { month: 'May', amount: 1500 },
    { month: 'Jun', amount: 1700 },
    { month: 'Jul', amount: 1600 },
    { month: 'Aug', amount: 1800 },
    { month: 'Sep', amount: 1900 },
    { month: 'Oct', amount: 1650 },
    { month: 'Nov', amount: 1750 },
    { month: 'Dec', amount: 2100 },
  ];

  // Find the max value for scaling
  const maxSpending = Math.max(...monthlySpending.map(item => item.amount));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending by Category */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Spending by Category</h3>
          <div className="space-y-4">
            {spendingByCategory.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-sm font-medium text-gray-900">${item.amount.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`${item.color} h-2.5 rounded-full`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Monthly Income vs Expenses */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Income vs Expenses</h3>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-500">Monthly Income</h4>
              <p className="text-2xl font-bold text-gray-900">$4,235.12</p>
              <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-500">Monthly Expenses</h4>
              <p className="text-2xl font-bold text-gray-900">$1,841.22</p>
              <p className="text-sm text-red-600 mt-1">+5.2% from last month</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Monthly Spending Chart */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">Monthly Spending (2025)</h3>
        <div className="h-64 flex items-end justify-between">
          {monthlySpending.map((item) => (
            <div key={item.month} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors rounded-t" 
                style={{ 
                  height: `${(item.amount / maxSpending) * 100}%`,
                  maxWidth: '24px',
                  margin: '0 auto'
                }}
              ></div>
              <span className="text-xs mt-2 text-gray-500">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;