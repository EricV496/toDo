import React from 'react'
import './ToDoSearch.css'
import { ToDoContext } from '../ToDoContext'
function ToDoSearch(){
  const {
    searchValue,
    setSerchValue
  } = React.useContext(ToDoContext)
    return (
      <input 
        className='ToDoSearch' 
        placeholder="Cortar Cebolla"
        value={searchValue}
        onChange={(event) => {
          setSerchValue(event.target.value)
        }}  
      />
    )
}

export { ToDoSearch }