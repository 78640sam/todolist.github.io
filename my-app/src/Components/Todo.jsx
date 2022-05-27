import { useState } from "react";

function Todo() {
var [data,setData]=useState("");
var [data1,setData1]=useState([]);
  var formSubmit =()=>{
 setData1(data);
  }
    return (
      <div className="App">
       <h1>hii</h1>
      <h1>Welcome to todo list</h1>
   
      <form onSubmit={formSubmit}>
        <input type="text" placeholder="TodoItem" value={data} onInput={(e)=>{
         setData(e.target.value);
        }}/>

        <button > Add Item</button>
      </form>
   
    
      <ul>
      <h1>Hello i am Sam</h1>
        {
          data1.map((item)=>{
           <li>{item.data1}</li>
          })
        }
      </ul>
      </div>
    );
  }
  
  export default Todo;