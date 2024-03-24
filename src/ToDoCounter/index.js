import React from 'react'
import { ToDoContext } from '../ToDoContext'
import './ToDoCounter.css'

function ToDoCounter(){
  const {
    completedToDos,
    totalToDos
  } = React.useContext(ToDoContext)
    return (
      <h1 className='ToDoCounter'>Has completado {completedToDos} de {totalToDos} TODOS</h1>
    )
}

export { ToDoCounter }