
import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import Header from './components/Header';



function App() {

  
  // array
  const [ boxList, setBoxList ] = useState([]);


  return (
    <div className="App">
      <Header />
      <Form boxList={boxList} setBoxList={setBoxList} />
      <Display boxList={boxList} />
    </div>
  );
}

export default App;
