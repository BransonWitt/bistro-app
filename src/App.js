import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import React from 'react'

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Homepage/>
    </React.Fragment>

  );
}

export default App;
