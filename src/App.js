import React, { useState } from 'react';
import './App.css';
import {Input} from "./components/Input/Input";
import {Button} from "./components/InputButton/Button";

function App() {

  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);


  return (
      <div className="App">
        <h1>Input лист</h1>
        <div className="sizes">
          <Input
              todoText={todoText}
              setTodoText={setTodoText}
              setIsCompleted={setIsCompleted}
              isCompleted={isCompleted}
          />
          <Button
              todoText={todoText}
              todos={todos}
              setTodos={setTodos}
              setIsCompleted={setIsCompleted}
              isCompleted={isCompleted}
              setTodoText={setTodoText}
          />
        </div>

      </div>
  );
}

export default App;

