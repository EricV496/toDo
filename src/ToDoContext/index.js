import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const ToDoContext = React.useContext()
const ToDoContext = React.createContext()

function ToDoProvider({children}){
    const {
        item: toDos, 
        saveItem: saveToDos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
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
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSerchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
        }}>
            { children }
        </ToDoContext.Provider>
    )
}


export { ToDoContext, ToDoProvider }