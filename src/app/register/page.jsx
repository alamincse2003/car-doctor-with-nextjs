"use client";
import Image from "next/image";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function RegisterPage() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 mt-10">
        {/* Left Side Image */}
        <div className="relative hidden md:flex items-center justify-center bg-white">
          <div className="w-3/5">
            <Image
              src="/assets/images/login/login.svg"
              alt="Login Illustration"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Sign up to Your Account
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="text-right text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-500 text-sm">
                or continue with
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-6 text-2xl text-gray-600">
              <FaGoogle className="hover:text-red-600 cursor-pointer" />
              <FaFacebook className="hover:text-blue-700 cursor-pointer" />
              <FaGithub className="hover:text-black cursor-pointer" />
            </div>

            {/* Signup link */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
