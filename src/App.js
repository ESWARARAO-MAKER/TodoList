import { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';

let myTodoList = [
  {
    uniqueId : 1,
    text : "Learn HTML"
  },
  {
    uniqueId : 2,
    text : 'Learn CSS',
  }
]

const App = () => {
  const [todoListItems, setTodoItems] = useState(myTodoList)

  const onSaveBtn = () => {
    localStorage.setItem("myTodoList", myTodoList)
  }

  const deleting = (uniqueId) => {
    let newTodo = todoListItems.filter((each) => (each.uniqueId !== uniqueId))
    setTodoItems(newTodo)
  }

  const onchangeInput = (event) => {
    return event.target.value;
  }

  const addTodo = () => {
    let newTodo = {
      uniqueId : myTodoList.length,
      text : onchangeInput()
    }
    setTodoItems([...todoListItems, newTodo])
  }
  return (
    <div className="App">
      <div className = "container">
        <h1 className = "heading">Todos</h1>
        <div className = "input-container">
          <input type= "text" placeholder = "Enter the Task" className = "inputEle" onChange={onchangeInput}/>
          <div>
            <button className = "btn" onClick={addTodo}>Add Task</button>
          </div>
        </div>
        <h2>Todos</h2>
        <ul>
          {
            todoListItems.map((each) =>(
              <TodoContainer each = {each} key = {each.uniqueId} deleting = {deleting}/>
            ))
          }
        </ul>
        <button className='btn' onClick={onSaveBtn}>Save Todo</button>
      </div>
    </div>
  );
}

export default App;
