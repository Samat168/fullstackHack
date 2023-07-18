import React, { useEffect } from "react";
import Profile from "../component/profile/Profile";
import { useAuth } from "../context/AuthContextProvider";

const ProfilePage = () => {
  const { checkuserid, userFavorites, getUser } = useAuth();
  useEffect(() => {
    userFavorites();
    getUser();
  }, []);
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
