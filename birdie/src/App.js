import React from 'react';
import NavBar from "./components/nav/NavBar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <ApplicationViews/>
    </Router>
    </>
  )
}

export default App;
