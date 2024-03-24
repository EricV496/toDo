import React from "react"
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDosLoading } from '../ToDosLoading'
import { ToDosError } from '../ToDosError'
import { EmptyToDos } from '../EmptyToDos'
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoContext } from "../ToDoContext";

function AppUI({
}){
    return (
        <>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedToDos,
                    completeToDo,
                    deleteToDo,
                }) => (
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
                )}
            </ToDoContext.Consumer>
            
            <CreateToDoButton />
        </>
    )
}

export { AppUI }