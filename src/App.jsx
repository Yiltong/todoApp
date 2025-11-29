import { use, useState } from "react"
import Todoinput from "../components/Todoinput"
import Todolist from "../components/Todolist"
   

function App() {

  const [todos, setTodo] = useState([
    'Go to gym',
    'Pick up the kids from school'
  ])
  const [todoValue, setTodoValue] = useState('')

  function AddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodo(newTodoList)
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index 
    })

    setTodo(newTodoList)
  }

  function editTodo(index) {
    const editTodoValue = todos[index]
    setTodoValue(editTodoValue)
    deleteTodo(index)
  }

  function StatusButton() {
    
  }

  return (
    <>
      <Todoinput AddTodo={AddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <Todolist todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
 
    </>
  )
}

export default App
