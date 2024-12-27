import React from "react";
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
};

export default App;
