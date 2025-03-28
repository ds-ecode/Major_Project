import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialty: "Cardiology" },
    { id: 2, name: "Dr. Michael Chen", specialty: "General Medicine" },
    { id: 3, name: "Dr. Emily Brown", specialty: "Pediatrics" },
    { id: 4, name: "Dr. James Taylor", specialty: "Orthopedics" },
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment booking
    console.log({ selectedDate, selectedDoctor, selectedTime });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Doctor Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Doctor
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className={`cursor-pointer p-4 rounded-lg border ${
                    selectedDoctor === doctor.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedDoctor(doctor.name)}
                >
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-blue-600" />
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{doctor.name}</p>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`flex items-center justify-center px-4 py-2 rounded-md ${
                    selectedTime === time
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div className="ml-3">
                <p className="font-medium text-gray-800">Medical Center Location</p>
                <p className="text-sm text-gray-600">123 Healthcare Ave, Medical District</p>
                <p className="text-sm text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;