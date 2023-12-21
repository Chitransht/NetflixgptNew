import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidatData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/Constant";

const Login = () => {
  const [isSignin, SetIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleclick = () => {
    //Validate the For Data
    const message = checkValidatData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    //SignUp/In Logic
    if (!isSignin) {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOzCSa1UA0xw24LxVs9PiGKsbtdDf95BkHSdp-kmIKQ&s",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggelsigninform = () => {
    SetIsSignin(!isSignin);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img src={BG_LOGO} alt="bg-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 px-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignin && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <p className="text-red-700 text-lg font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg"
          onClick={handleclick}
        >
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
