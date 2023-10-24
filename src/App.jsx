import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Methods from "./components/methods/Methods";
import ChooseYourPath from "./components/chooseYourPath/ChooseYourPath";
import GetInTouch from "./components/getInTouch/GetInTouch";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Methods />
      <ChooseYourPath />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default App;
