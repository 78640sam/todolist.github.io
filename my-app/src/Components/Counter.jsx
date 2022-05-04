import React, { useState } from 'react';
function Counter() {
    var [data,setData]=useState(0);

    var handelAdd= ()=>{
        setData(data+1);
        
    }

    var handelSub= ()=>{
        setData(data-1);
    }

  return (
    <div className="App">
     <h1>hello welcome yo counter page</h1>

<h1>count={data}</h1>
     <button onClick={handelAdd}>Add</button>
     <button onClick={handelSub}>Sub</button>

     
    </div>
  );
}

export default Counter;
