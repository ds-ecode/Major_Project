import React from 'react';
import { FileText, Download, Eye, Calendar, Activity, Heart } from 'lucide-react';

const HealthRecords = () => {
  const records = [
    {
      id: 1,
      type: "Blood Test",
      date: "2024-03-01",
      doctor: "Dr. Sarah Wilson",
      status: "Completed",
      category: "Laboratory"
    },
    {
      id: 2,
      type: "X-Ray",
      date: "2024-02-28",
      doctor: "Dr. James Taylor",
      status: "Pending",
      category: "Radiology"
    },
    {
      id: 3,
      type: "Annual Checkup",
      date: "2024-02-15",
      doctor: "Dr. Michael Chen",
      status: "Completed",
      category: "General"
    }
  ];

  const vitals = {
    bloodPressure: "120/80",
    heartRate: "72 bpm",
    temperature: "98.6°F",
    weight: "150 lbs",
    height: "5'10\""
  };

  return (
    <div className="space-y-6">
      {/* Vitals Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Vitals</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">Blood Pressure</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{vitals.bloodPressure}</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-red-600" />
              <span className="ml-2 text-sm text-gray-600">Heart Rate</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{vitals.heartRate}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-yellow-600" />
              <span className="ml-2 text-sm text-gray-600">Temperature</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{vitals.temperature}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-green-600" />
              <span className="ml-2 text-sm text-gray-600">Weight</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{vitals.weight}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-purple-600" />
              <span className="ml-2 text-sm text-gray-600">Height</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">{vitals.height}</p>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Records</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-900">{record.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-900">{record.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.doctor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      record.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;