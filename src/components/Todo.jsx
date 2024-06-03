import React from "react";
import Tasks from "./Tasks";
function Todo({todos,deltodo}) {
  return (
    <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {todos.map((todo,index)=>{
        return(
            <Tasks todo={todo} index={index} deltodo={deltodo} />
        )
      })}
    </div>
  );
}

export default Todo;
