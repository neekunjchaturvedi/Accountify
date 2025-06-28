import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Just for demo, no real API:
    alert(`Logged in as: ${formData.identifier}`);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked (demo only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white shadow">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="identifier" className="text-gray-600">
              Email or Phone
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="Email or Phone"
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full p-3 rounded-sm bg- primary text-white font-semibold hover:bg-green-700 transition"
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full p-3 mt-4 border rounded-sm border-gray-800 text-gray-800 hover:bg-gray-50 transition"
          >
            <FcGoogle className="mr-2" /> Sign in with Google
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="underline text-red-500"
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}
