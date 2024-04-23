import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import axios from "axios"
import LoginPage from "./components/LoginPage/LoginPage.jsx";
axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<Home/>}/> */}
        <Route path="/" element={<Home/>}/>
      </Routes>
  )
}

export default App