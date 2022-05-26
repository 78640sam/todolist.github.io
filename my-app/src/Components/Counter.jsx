import React, { useState } from 'react';
import "./style.css";
function Counter() {
    var [data,setData]=useState(0);

    var handelAdd= ()=>{
        if(data<20){
            setData(data+1);
            
        }
      
        
    }

    var handelSub= ()=>{
        if(data>0){
            setData(data-1);
        }
        
    }

  return (
    <div className="App">
     <h1>hello welcome to counter page</h1>
     <p>Count the number</p>

<h1>count={data}</h1>
     <button onClick={handelAdd}>Add</button>
     <button onClick={handelSub}>Sub</button>

     
    </div>
  );
}

export default Counter;
