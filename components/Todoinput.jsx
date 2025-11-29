import React, { useState } from "react"


export default function TodoInput(props){
    const { AddTodo, todoValue, setTodoValue } = props

    return(
        <header>
            <input placeholder="Enter Todo..." 
                onChange={(e) => {
                    setTodoValue(e.target.value)
                }}
            />
            <button onClick={() => {
                AddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>

        </header>
    )
}