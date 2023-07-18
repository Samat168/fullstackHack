import React, { useState, useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <MainRoutes />
      {windowWidth < 730 ? null : <Footer />}
    </div>
  );
};

export default App;
