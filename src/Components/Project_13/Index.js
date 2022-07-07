import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import "./index.css";


const Index = () => {
 
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero /> 
      <Submenu />
    </>
  );
};

export default Index;
