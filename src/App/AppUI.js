import React from "react"
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDosLoading } from '../ToDosLoading'
import { ToDosError } from '../ToDosError'
import { EmptyToDos } from '../EmptyToDos'
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({
    loading,
    error,
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
                {loading && <ToDosLoading/>}
                {error && <ToDosError/>}
                {(!loading && searchedToDos.length === 0)
                    && <EmptyToDos/>}
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