import React from "react"; // React ko import kar rahe hain
import { BrowserRouter, Routes, Route } from "react-router-dom"; // React Router DOM ke components ko import kar rahe hain
import CollegeDetails from "./CollegeDetails"; // CollegeDetails component ko import kar rahe hain
import LoginPortal from "./LoginPortal"; // LoginPortal component ko import kar rahe hain

const App = () => { 
  return (
    // BrowserRouter component ka use karke routing setup kar rahe hain
    <BrowserRouter>
      {/* Routes component ke andar sabhi route definitions hain */}
      <Routes>
        {/* Route component ka use karke home path '/' ke liye LoginPortal component render karenge */}
        <Route path="/" element={<LoginPortal />} />
        {/* Route component ka use karke '/CollegeDetails' path ke liye CollegeDetails component render karenge */}
        <Route path="/CollegeDetails" element={<CollegeDetails />} />
      </Routes>
    </BrowserRouter>
  ); 
};

export default App; // App component ko export kar rahe hain