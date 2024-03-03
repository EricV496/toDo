import React from 'react'
import './ToDoSearch.css'
function ToDoSearch({
  searchValue,
  setSerchValue
}){
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