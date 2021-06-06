import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="app">
      {/** HEADER*/}
      <Header />
      {/** App body*/}
      <div className="app__body">
        <Sidebar />
        {/** feed*/}
        {/** widgets */}
      
      </div>
    </div>
  );
}

export default App;
