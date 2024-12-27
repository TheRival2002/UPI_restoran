import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <div className="welcome-container">
              <h1 className="welcome-header">Welcome to FoodHub!</h1>
              <p className="welcome-subtitle">
                Your favourite foods delivered fast at your door.
              </p>
              <button>Sign In</button>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
