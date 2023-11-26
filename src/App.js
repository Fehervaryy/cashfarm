// App.js
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import HomePage from './Homepage';
import Login from './Login';
import SignupPage from './SignupPage';
import TransactionHistory from './TransactionHistory';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogTransaction from './LogTransaction';
import Farm from './Farm';
import BudgetCalculator from './Calculator';
import TheFarm from './TheFarm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/test" element={<LogTransaction />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/test2" element={<BudgetCalculator />} />
          <Route path='/thefarm' element={<TheFarm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
