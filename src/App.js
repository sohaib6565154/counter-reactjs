
import React, { useState } from 'react';

function App() {
  let [counter,setcounter]=useState(0);
  //let value=0;
  const addValue=()=>{
    //console.log("clicked" ,counter)
    setcounter(counter+1);
  }
  const removeValue=()=>{
    counter=counter-1;
    setcounter(counter);
  }
  return (
    <>
    <h2>Sohaib Hassan</h2>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value</button><br/><br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
