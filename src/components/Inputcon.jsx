import React from "react";

function Inputcon({inputval,writetodo,addtodo}) {
  return (
    <div className="flex flex-row justify-center">
      <input className="w-[30rem] rounded-lg mx-4" type="text"  value={inputval} onChange={writetodo} />
      <div className="">
      <button className="text-3xl"  onClick={addtodo}>+</button>
      </div>
    </div>
  );
}

export default Inputcon;
