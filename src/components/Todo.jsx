import React from "react";
import Tasks from "./Tasks";
function Todo({todos,deltodo}) {
  return (
    <div className="items-center flex flex-col">
      {todos.map((todo,index)=>{
        return(
            <Tasks todo={todo} index={index} deltodo={deltodo} />
        )
      })}
    </div>
  );
}

export default Todo;
