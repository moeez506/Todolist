import React, { useState, useEffect } from "react";
import './App.css';

// impoting Components
import Form from "./components/From"; 
import Todolist from "./components/Todolist";



function App() {
  

  const [inputText, setinputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setfilteredTodos] = useState([]);

// useeffect
useEffect(() => {
  filterHandler();
}, [todos, status])

  // Function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredTodos(todos.filter((todo) => todo.completed == true ))    
        break;
      case 'uncompleted':
          setfilteredTodos(todos.filter((todo) => todo.completed == false ))    
          break;
      default:
        setfilteredTodos(todos)
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form setTodos={setTodos}
       todos={todos} 
       setinputText={setinputText}
        inputText={inputText}
        setStatus={setStatus}
        />  
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>  
    </div>
  );
}

export default App;
