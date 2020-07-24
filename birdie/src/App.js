import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';

function App() {
  return (
    <>
    <Router>
      <ApplicationViews/>
    </Router>
    </>
  )
}

export default App;
