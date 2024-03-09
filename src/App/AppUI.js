import React from "react"
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({
    completedToDos,
    totalToDos,
    searchValue,
    setSerchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
}){
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
    )
}

export { AppUI }