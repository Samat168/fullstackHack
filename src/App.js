import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
