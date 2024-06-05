import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@nextui-org/react";
import ChatBot2 from "./Componets/ChatBot/ChatBot2";
import ChatBot from "./Componets/ChatBot/ChatBot";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Componets/ChatBot/LandIng/LandingPage";
import Home from "./Componets/ChatBot/HomePage/Home";
import UseRecod from "./Componets/ChatBot/HomePage/UseRecod";
import UseRecodWebCam from "./Componets/ChatBot/HomePage/UseRecodWebCam";



function App() {
  return (

     <Routes>
       <Route path="/" element={<LandingPage />}/>
       <Route path="/Home" element={<Home />}/>
       <Route path="/UseRecod" element={<UseRecod />}/>
       <Route path="/UseRecodWebCam" element={<UseRecodWebCam />}/>
     </Routes>
    
  );
}

export default App;
