import React, { useState } from 'react';
function Counter() {
    var [data,setData]=useState(0);

    var adddata= (data)=>{
        setData(data+1);
        
    }

    var subdata= (data)=>{
        setData(data-1);
    }

  return (
    <div className="App">
     <h1>hello welcome yo counter page</h1>

<h1>count={data}</h1>
     <button onClick={adddata}>Add</button>
     <button onClick={subdata}>Sub</button>

     
    </div>
  );
}

export default Counter;
