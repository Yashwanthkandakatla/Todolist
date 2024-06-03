import React from "react";

function Tasks({todo,index ,deltodo,check,checked}) {
  
  return (
    <div className="todo flex flex-row justify-center h-[4rem] m-2 bg-myblue items-center rounded-3xl w-[60rem]">
      <p className="w-[30rem]">{todo}</p>
      <div className="actions">
        <input className="" type="checkbox" />
        <button className="px-2" onClick={()=>deltodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Tasks;
