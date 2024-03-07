import { useEffect, useState } from "react"
import "./App.css"
import { AddTodo } from "./AddTodo"
import { ItemList } from "./ItemList"


export default function App(){
  const [message, setMessage] = useState('');
  const[todos, setTodos] = useState(() => {
    const local = localStorage.getItem("ITEM")
    return JSON.parse(local)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTask( title){
    setTodos((currentTodos) =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}, 
      ]
     })
  }


  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id == id){
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTask(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return (
  <>
  <h1 className="header">Todo List</h1>
  <AddTodo onSubmit={addTask}/>
  <ItemList todos = { todos } toggleTodo={toggleTodo} deleteTask={deleteTask}></ItemList>
 </>
  )
}