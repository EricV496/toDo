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
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm"

function AppUI(){
    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext)
    return (
        <>
            <ToDoCounter />
            <ToDoSearch />

            
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
            
            <CreateToDoButton 
                setOpenModal={setOpenModal}
            />

            {
            openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
                )
            }
        </>
    )
}

export { AppUI }