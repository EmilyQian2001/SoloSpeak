import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import facebookimg from "@/public/Facebook_icon.png";
import googleimg from "@/public/Google_Logo.png";

// const callbackUrl = "http://localhost:3000";

const Login = () => {
  return (
    <div className="flex items-center bg-gray-100 py-48 min-h-screen">
      <div className="flex flex-grow justify-center mx-auto py-16 space-x-6">
        <div className="flex-col items-center hidden lg:inline-block max-w-xl">
          <p className="text-8xl font-sans text-blue-500 font-bold ">
            facebook
          </p>
          <p className="text-4xl font-sans font-normal ">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <div className="flex max-w-xl">
          <div className="flex items-center justify-center py-16 bg-white rounded-lg shadow-md w-96 text-center">
            <div>
              <a
                className="px-7 py-2 text-white bg-blue-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                // style={{ backgroundColor: "#3b5998" }}
                onClick={() => signIn("facebook")}
                role="button"
              >
                <Image
                  className="pr-2"
                  src={facebookimg}
                  alt=""
                  height={30}
                  width={30}
                />
                Sign in with Facebook
              </a>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <a
                className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{ backgroundColor: "#55acee" }}
                onClick={() => signIn("google")}
                role="button"
              >
                <Image
                  className="pr-2"
                  src={googleimg}
                  alt=""
                  height={30}
                  width={30}
                />
                Sign in with Google
              </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
