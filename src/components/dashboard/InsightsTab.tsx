import React from 'react';
import { AlertTriangle, TrendingUp, TrendingDown, Zap, Target } from 'lucide-react';

const InsightsTab: React.FC = () => {
  // Mock AI insights data
  const alerts = [
    {
      id: 1,
      type: 'unusual',
      title: 'Unusual spending detected',
      description: 'Your spending on Entertainment increased by 45% this month compared to your 6-month average.',
      date: '2 days ago',
      icon: AlertTriangle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      id: 2,
      type: 'subscription',
      title: 'Duplicate subscription detected',
      description: 'You appear to be paying for two similar streaming services: Netflix ($14.99) and Hulu ($12.99).',
      date: '4 days ago',
      icon: AlertTriangle,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
  ];
  
  const insights = [
    {
      id: 1,
      type: 'saving',
      title: 'Savings opportunity',
      description: 'Based on your cash flow, you could increase your monthly savings by $350 without impacting your lifestyle.',
      icon: TrendingUp,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      type: 'spending',
      title: 'Spending pattern',
      description: 'You spend most on restaurants on Fridays and Saturdays. Setting a weekend budget could help you save more.',
      icon: TrendingDown,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      id: 3,
      type: 'forecast',
      title: 'End of month forecast',
      description: "At your current rate, you'll have approximately $580 left at the end of the month.",
      icon: Zap,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      type: 'goal',
      title: 'Goal progress insight',
      description: 'Your vacation fund is growing slower than planned. Consider setting up an automatic weekly transfer of $50.',
      icon: Target,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* AI Assistant Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-full">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">AI Financial Assistant</h3>
            <p className="mt-1 text-blue-100">
              Your personalized financial insights, powered by AI
            </p>
          </div>
        </div>
      </div>
      
      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Alerts</h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className={`${alert.iconBg} p-2 rounded-full`}>
                    <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium text-gray-900">{alert.title}</h4>
                      <span className="text-xs text-gray-500">{alert.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
                    <div className="mt-3 flex space-x-3">
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-800">
                        View Details
                      </button>
                      <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* AI Insights */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Smart Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className={`${insight.iconBg} p-2 rounded-full`}>
                  <insight.icon className={`h-5 w-5 ${insight.iconColor}`} />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900">{insight.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{insight.description}</p>
                  <button className="mt-3 text-xs font-medium text-blue-600 hover:text-blue-800">
                    Apply Suggestion
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Predictive Analysis */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Cash Flow Prediction</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-500">Predicted Income</h4>
            <p className="text-xl font-bold text-gray-900">$4,580</p>
            <p className="text-xs text-blue-600 mt-1">Next 30 days</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-500">Predicted Expenses</h4>
            <p className="text-xl font-bold text-gray-900">$2,120</p>
            <p className="text-xs text-red-600 mt-1">Next 30 days</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-500">Predicted Savings</h4>
            <p className="text-xl font-bold text-gray-900">$2,460</p>
            <p className="text-xs text-green-600 mt-1">Next 30 days</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Based on your historical spending patterns and upcoming scheduled payments, we predict you'll have approximately $2,460 in savings by the end of the next 30 days.
        </p>
      </div>
    </div>
  );
};

export default InsightsTab;