import { use, useState } from "react"
import Status from "./status"
import AlarmCountdown from "./Time"

export default function Todolist({ todos, deleteTodo, editTodo }) {


//     function deleteTodo(index) {
//     const newTodoList = todos.filter((todo, todoIndex) => {
//       return todoIndex !== index
//     })

//     setTodo(newTodoList)
//   }

    

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                  
                        <li key={todoIndex} className="List">
                            {todo}
                        <button onClick={() => {
                            editTodo(todoIndex)
                        }}>edit</button>
                        <button onClick={() => {
                            deleteTodo(todoIndex)
                            console.log(todoIndex)
                        }}>delete</button>
                        <Status />
                        <AlarmCountdown />
                        </li>
                
                )
            })}
        </ul>
    )
}