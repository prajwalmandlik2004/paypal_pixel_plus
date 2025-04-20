import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import OverviewTab from '../components/dashboard/OverviewTab';
import ActivityTab from '../components/dashboard/ActivityTab';
import AnalyticsTab from '../components/dashboard/AnalyticsTab';
import InsightsTab from '../components/dashboard/InsightsTab';
import GoalsTab from '../components/dashboard/GoalsTab';
import UserGreeting from '../components/dashboard/UserGreeting';
import { generatePDF } from '../utils/pdfGenerator';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleDownloadReport = () => {
    generatePDF();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <UserGreeting />
        
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Financial Dashboard</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your finances and get AI-powered insights</p>
            </div>
            <button
              onClick={handleDownloadReport}
              className="mt-4 sm:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Download PDF Report
            </button>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b border-gray-200">
              <TabsList className="flex">
                <TabsTrigger value="overview" className="px-4 py-3 text-sm font-medium">Overview</TabsTrigger>
                <TabsTrigger value="activity" className="px-4 py-3 text-sm font-medium">Activity</TabsTrigger>
                <TabsTrigger value="analytics" className="px-4 py-3 text-sm font-medium">Analytics</TabsTrigger>
                <TabsTrigger value="insights" className="px-4 py-3 text-sm font-medium">AI Insights</TabsTrigger>
                <TabsTrigger value="goals" className="px-4 py-3 text-sm font-medium">Goals</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="p-4 sm:p-6">
              <TabsContent value="overview">
                <OverviewTab />
              </TabsContent>
              
              <TabsContent value="activity">
                <ActivityTab />
              </TabsContent>
              
              <TabsContent value="analytics">
                <AnalyticsTab />
              </TabsContent>
              
              <TabsContent value="insights">
                <InsightsTab />
              </TabsContent>
              
              <TabsContent value="goals">
                <GoalsTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;