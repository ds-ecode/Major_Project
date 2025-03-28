import React, { useState } from "react";
import axios from "axios";
import { User, Mail, Lock, UserCog } from "lucide-react";

interface RegisterFormProps {
  onSubmit: (data: { [key: string]: string }) => void;
}

export default function Register({ onSubmit }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email ? "" : "Email is required",
      password: formData.password ? "" : "Password is required",
      role: formData.role ? "" : "Role is required",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      try {
        const response = await axios.post(
          "http://localhost:9090/api/v1/register",
          formData,
        );
        onSubmit(response.data);
        alert("User registered successfully");
      } catch (error) {
        console.error("Error registering user:", error);
        alert("Error registering user");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8 mb-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create an Account
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <User className="w-4 h-4 mr-2 text-blue-500" />
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white hover:bg-gray-100 transition-colors duration-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-blue-500" />
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white hover:bg-gray-100 transition-colors duration-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Lock className="w-4 h-4 mr-2 text-blue-500" />
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white hover:bg-gray-100 transition-colors duration-200"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <UserCog className="w-4 h-4 mr-2 text-blue-500" />
            Role
          </label>
          <div className="flex space-x-6 mt-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="doctor"
                name="role"
                value="doctor"
                checked={formData.role === "doctor"}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="doctor" className="ml-2 text-sm text-gray-700">
                Doctor
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="patient"
                name="role"
                value="patient"
                checked={formData.role === "patient"}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor="patient" className="ml-2 text-sm text-gray-700">
                Patient
              </label>
            </div>
          </div>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 active:from-blue-700 active:to-purple-800 transition-colors duration-200 flex items-center justify-center"
      >
        <User className="w-4 h-4 mr-2" />
        Register
      </button>

      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Log in
        </a>
      </div>
    </form>
  );
}
