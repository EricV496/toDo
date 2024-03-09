import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import './App.css';

// const defaultArray = [
//   {text:"cortar cebolla",
//     completed: false},
//   {text:"llorar",
//     completed: true},
//   {text:"Programar",
//     completed: true},
//   {text:"dormir",
//     completed: false},
//   {text:"Cantar una Canción",
//     completed: false}
// ]

// localstorage.setItem('TODOS_V1', JSON.stringify(defaultArray))
// localStorage.removeItem('TODOS_V1')

function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSerchValue] = React.useState('')
  
  const completeToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    )
    newToDos[toDoIndex].completed = true
    saveToDos(newToDos)
  }
  
  const deleteToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    )
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length
  const totalToDos = toDos.length

  const searchedToDos = toDos.filter(toDo => {
                              const noTildes = (text) => {
                                return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                              };
                              const toDoText = noTildes(toDo.text.toLocaleLowerCase())
                              const serachText = noTildes(searchValue.toLocaleLowerCase())
                              return toDoText.includes(serachText)
                            })

  return (
    <AppUI 
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSerchValue={setSerchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
