import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home'; 
import SobreNos from './Pages/SobreNos';

// APP PRINCIPAL
function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="header-block">
          <NavBar />
        </div>
        <Home />
        {/* <SobreNos /> */}
      </body>
    </div>
  );
}

export default App;
