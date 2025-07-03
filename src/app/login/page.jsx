"use client";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

export default function LoginPage() {
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
              Sign in to Your Account
            </h2>

            <LoginForm />

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-500 text-sm">
                or continue with
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Social Login */}
            <SocialLogin />

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
