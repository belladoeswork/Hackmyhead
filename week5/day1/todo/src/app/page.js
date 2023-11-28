"use client";

import React, { useState } from 'react'
import styles from './page.module.css'



export default function Home() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

    function HandleSubmit(e){
      e.preventDefault()

      setTodos((currentTodo) => {
        return [
          ...currentTodo,
          {id: crypto.randomUUID(), title: newItem, completed: false},
        ]
      })

      setNewItem("")

    }

    function ToggleTodo(id, completed) {
      setTodos(currentTodo => {
        return currentTodo.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed}
          }
          return todo
        })
      })
    }

    function DeleteTodo(id) {
      setTodos(currentTodo => {
        return currentTodo.filter(todo => todo.id !== id)
        })
      }
  


  return (
    <div>
      <form onSubmit={HandleSubmit} className="new-items">
        <div className="form-row">
          <label>New item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'> Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map (todo => {
          return (
            
            <li key={todo.id}>
              <label>
                <input type='checkbox' checked={todo.completed} 
                onChange={e => ToggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => DeleteTodo(todo.id)} className='btn del'>Delete</button>
            </li>
          )
        })}
    
      </ul>
    </div>
  )
}
