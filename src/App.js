import { useRoutes } from "react-router-dom";

import "./App.css";

import Router from "./Router";
import Navbar from "./Components/Home/Navbar/navbar";
import Footer from "./Components/Home/Footer/footer";
import ScrollToTop from "./Components/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router/>
      <Footer />
    </>
  );
}

export default App;
