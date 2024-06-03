import { useState } from "react";
import "./App.css";
import Inputcon from "./components/Inputcon";
import Todo from "./components/Todo";

function App() {
  const [inputval,setinputval] = useState('')
  const [todos,settodos] = useState([])
  const [checked,setchecked]=useState([]);
  const [done,setdone]=useState([]);
  const curr=""

  const schedule=[
    "6:15 - 7:15 Gym",
    "7:30 - 9:15 Study Slot 1",
    "9:15 - 5:00 College",
    "7:00 - 9:00 second slot",
    "10:00 - 11:00 DSA" 
  ]

  function writetodo(e){
    setinputval(e.target.value)
    // console.log(e.target.value)
  }
  function myschedule(){
    settodos(schedule)
  }
  function removeschedule(){
    settodos([])
  }
  // function check(checkind){
  //   setchecked(true)
  //     settodos((prevtodos)=>prevtodos.filter((prevtodos,prevtodosindex)=>{
  //       return prevtodosindex!=checkind
  //     }))

  // }

  
  function addtodo(){
    if(inputval!=''){
      settodos((prevtodos) =>[...prevtodos,inputval])
      setinputval('')
      //console.log("Hello input provided")
    }
      
    
  }
  function deltodo(todoindex){
    settodos((prevtodos)=>prevtodos.filter((prevtodos,prevtodosindex)=>{
      return prevtodosindex!=todoindex
    }))
  }


console.log(todos)

  return (
    // <h1>Hi this is a man working to improve development skills</h1>
    <main className="h-screen">
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      <div className="w-full h-[8rem]  flex justify-center text-5xl font-bold ">To Do List</div>
      
    
      <Inputcon inputval={inputval} writetodo={writetodo} addtodo={addtodo}/>
      <Todo todos={todos} deltodo={deltodo} />
      <div className="flex flex-row items-center justify-evenly">
      <button className="bg-myblue rounded-lg w-[10rem]" onClick={myschedule}>My Schedule</button>
      <button className="bg-myblue rounded-lg w-[10rem] bg-orange-400" onClick={removeschedule}>removeschedule</button>

      </div>
      
    </main>
  );
}

export default App;
