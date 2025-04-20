import React, { useState } from 'react';
import { Target, Plus, Trash2 } from 'lucide-react';

const GoalsTab: React.FC = () => {
  // Mock goals data
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Vacation to Italy',
      targetAmount: 3500,
      currentAmount: 1750,
      deadline: '2025-08-15',
      category: 'Travel',
      color: 'blue',
    },
    {
      id: 2,
      title: 'New Laptop',
      targetAmount: 1800,
      currentAmount: 1200,
      deadline: '2025-06-01',
      category: 'Electronics',
      color: 'purple',
    },
    {
      id: 3,
      title: 'Emergency Fund',
      targetAmount: 10000,
      currentAmount: 6500,
      deadline: '2025-12-31',
      category: 'Savings',
      color: 'green',
    },
  ]);

  // State for new goal form
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    targetAmount: '',
    deadline: '',
    category: 'Travel',
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
  };

  // Add new goal
  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    
    const goalToAdd = {
      id: goals.length + 1,
      title: newGoal.title,
      targetAmount: parseFloat(newGoal.targetAmount),
      currentAmount: 0,
      deadline: newGoal.deadline,
      category: newGoal.category,
      color: ['blue', 'purple', 'green', 'red', 'yellow'][Math.floor(Math.random() * 5)],
    };
    
    setGoals([...goals, goalToAdd]);
    setNewGoal({
      title: '',
      targetAmount: '',
      deadline: '',
      category: 'Travel',
    });
    setShowNewGoalForm(false);
  };

  // Delete goal
  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  // Calculate progress percentage
  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Your Financial Goals</h3>
        <button
          onClick={() => setShowNewGoalForm(!showNewGoalForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </button>
      </div>
      
      {/* New Goal Form */}
      {showNewGoalForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Create New Goal</h4>
          <form onSubmit={handleAddGoal}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Goal Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={newGoal.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">
                  Target Amount ($)
                </label>
                <input
                  type="number"
                  name="targetAmount"
                  id="targetAmount"
                  required
                  min="1"
                  value={newGoal.targetAmount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                  Target Date
                </label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  required
                  value={newGoal.deadline}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={newGoal.category}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="Travel">Travel</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Savings">Savings</option>
                  <option value="Education">Education</option>
                  <option value="Home">Home</option>
                  <option value="Car">Car</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowNewGoalForm(false)}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Create Goal
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Goals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          
          return (
            <div key={goal.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className={`p-2 rounded-full bg-${goal.color}-100`}>
                    <Target className={`h-5 w-5 text-${goal.color}-600`} />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">{goal.title}</h4>
                    <p className="text-sm text-gray-500">{goal.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">${goal.currentAmount.toFixed(2)}</span>
                  <span className="text-gray-500">Goal: ${goal.targetAmount.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`bg-${goal.color}-500 h-2.5 rounded-full`} 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm font-medium text-gray-500">{progress}% complete</span>
                  <span className="text-xs text-gray-500">Due by {new Date(goal.deadline).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500">Monthly contribution needed:</p>
                  <p className="text-sm font-medium text-gray-900">$350.00</p>
                </div>
                <button
                  className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium rounded"
                >
                  Add Money
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Empty state */}
      {goals.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
          <Target className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No goals yet</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating your first financial goal</p>
          <div className="mt-6">
            <button
              onClick={() => setShowNewGoalForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add First Goal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalsTab;