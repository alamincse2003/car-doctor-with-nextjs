import { registerUser } from "@/app/actions/auth/registerUser";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          name="name"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          name="email"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          name="password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
      <p className="text-center">
        Don't Have an account?
        <Link href="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
