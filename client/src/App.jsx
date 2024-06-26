import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
import axios from "axios"
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import { Admin } from "./pages/admin/Admin.jsx";

axios.defaults.baseURL = "http://localhost:3000"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>} />
    </Routes>
  )
}

export default App