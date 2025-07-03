"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }

    // console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
