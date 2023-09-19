import React from 'react';
import './App.css';
import Home from './Pages/Home'; 
import SobreNos from './Pages/SobreNos';

// APP PRINCIPAL
function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Home />
        {/* <SobreNos /> */}
      </body>
    </div>
  );
}

export default App;
