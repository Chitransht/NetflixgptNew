import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveUser, addUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constant";
import { toggleGptSearch } from "../utils/GptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const Navigate = useNavigate();
  const handelsignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        Navigate("/browse");
      } else {
        dispatch(RemoveUser());
        Navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="absolute w-screen px-12 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between ">
      <img
        className="w-[150px] mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="p-4 flex justify-around">
          <button
            className="py-2 px-4 mx-6 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GTP Search"}
          </button>
          <img className="" src={USER_LOGO} alt="logout" />
          <button className="text-white" onClick={handelsignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
