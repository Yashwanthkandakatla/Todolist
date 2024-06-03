import React from "react";

function Tasks({todo,index ,deltodo,check,checked}) {
  
  return (
    <div className="todo  h-[6rem] m-2 bg-myblue rounded-3xl p-4">
      <p className="">{todo}</p>
      <div className="actions">
        <input className="" type="checkbox" />
        <button className="px-2" onClick={()=>deltodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Tasks;
