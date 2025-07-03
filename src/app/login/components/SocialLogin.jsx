"use client";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("Successfully Logged IN");
    }
  }, [session?.status]);

  return (
    <div className="flex justify-center space-x-6 text-2xl text-gray-600">
      <FaGoogle
        type="button"
        onClick={() => handleSocialLogin("google")}
        className="hover:text-red-600 cursor-pointer"
      />
      <FaGithub
        type="button"
        onClick={() => handleSocialLogin("github")}
        className="hover:text-black cursor-pointer"
      />
    </div>
  );
};

export default SocialLogin;
