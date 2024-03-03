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
    completed: false}
]
function App() {
  const [toDos, setToDos] = React.useState(defaultArray)
  const [searchValue, setSerchValue] = React.useState('')
  console.log('Los usuario buscan ' + searchValue)

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length
  const totalToDos = toDos.length

  return (
    <>

      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch 
        searchValue={searchValue}
        setSerchValue={setSerchValue}
      />

      <ToDoList>
        {defaultArray.map(item => (
          <ToDoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </ToDoList>
      
      <CreateToDoButton />
    </>
  );
}

export default App;
