import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
