import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Just demo: no backend
    alert(`Registered: ${formData.name}`);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white shadow">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 rounded-sm bg- primary text-white font-semibold hover:bg-green-700 transition"
          >
            Sign up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="underline text-red-500"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
