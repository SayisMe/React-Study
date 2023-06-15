import React from "react";
import Hello from "./Hello";
import './App.css'

function App() {
  const name = 'ff';
  const style = {
    backgroundColor: '#fffff',
    color: 'red',
    fontSize: 28,
    padding: '3rem',
    margin: '1rem'
  }
  return (
    <div className="gray-box" >
      {/* */}
      <div style = {style}>{name}</div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
