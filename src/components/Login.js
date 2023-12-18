import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, SetIsSignin] = useState(true);
  const toggelsigninform = () => {
    SetIsSignin(!isSignin);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 px-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-700"
            required
          />
        )}

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-700"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
          required
        />

        <button className="p-4 my-6 bg-red-500 w-full rounded-lg">
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm cursor-pointer" onClick={toggelsigninform}>
          {isSignin
            ? "New to Netflix-GPT? SignUp Now"
            : "Already a user, Login In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
