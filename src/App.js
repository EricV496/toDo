import logo from './platzi.webp';
import React from 'react';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

const defaultArray = [
  {text:"cortar cebolla",
    completed: false},
  {text:"llorar",
    completed: true},
  {text:"Programar",
    completed: true},
  {text:"dormir",
    completed: false},
  {text:"Cantar una Canción",
    completed: false}
]
function App() {
  const [toDos, setToDos] = React.useState(defaultArray)
  const [searchValue, setSerchValue] = React.useState('')
  
  const completeToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    )
    newToDos[toDoIndex].completed = true
    setToDos(newToDos)
  }
  
  const deleteToDo = (text) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text == text
    )
    newToDos.splice(toDoIndex, 1)
    setToDos(newToDos)
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
    <>

      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSerchValue={setSerchValue}
      />

      <ToDoList>
        {searchedToDos.map(item => (
          <ToDoItem 
              key={item.text} 
              text={item.text} 
              completed={item.completed}
              onComplete={() => completeToDo(item.text)}
              onDelete={() => deleteToDo(item.text)}
          />
        ))}
      </ToDoList>
      
      <CreateToDoButton />
    </>
  );
}

export default App;
