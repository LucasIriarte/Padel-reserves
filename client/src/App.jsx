import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App