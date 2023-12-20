import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveUser, addUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between ">
      <img className="w-[200px]" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="p-4 flex">
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
