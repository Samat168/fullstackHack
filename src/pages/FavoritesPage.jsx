import React, { useEffect } from "react";
import Favorites from "../component/favorites/Favorites";
import { useAuth } from "../context/AuthContextProvider";

const FavoritesPage = () => {
  const { favorites, userFavorites, userId, checkuserid, users } = useAuth();

  useEffect(() => {
    checkuserid();
  }, []);

  return (
    <div>
      <Favorites />
    </div>
  );
};

export default FavoritesPage;
