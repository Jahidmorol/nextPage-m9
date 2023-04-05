import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <div className="relative">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
