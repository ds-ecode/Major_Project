import React from 'react';
import { Activity, Calendar, FileText, Bell, Clock } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Wilson", specialty: "Cardiology", date: "2024-03-20", time: "10:00 AM" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "General Medicine", date: "2024-03-25", time: "2:30 PM" },
  ];

  const recentRecords = [
    { id: 1, type: "Blood Test", date: "2024-03-01", status: "Completed" },
    { id: 2, type: "X-Ray", date: "2024-02-28", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of your health information and upcoming appointments.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <FileText className="h-10 w-10 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Test Results</p>
              <p className="text-lg font-semibold text-gray-800">1 Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Appointments and Records */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 

        {/* Recent Health Records */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Health Records</h2>
          <div className="space-y-4">
            {recentRecords.map((record) => (
              <div key={record.id} className="flex items-start p-4 border rounded-lg">
                <FileText className="h-5 w-5 text-purple-600 mt-1" />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{record.type}</p>
                  <p className="text-sm text-gray-600">Date: {record.date}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    record.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;