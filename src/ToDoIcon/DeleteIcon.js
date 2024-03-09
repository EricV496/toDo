import { ToDoIcon } from ".";
import React from "react";

function DeleteIcon({ onDelete }){
    return (
            <ToDoIcon
            type="delete"
            color="gray"
            onClick={onDelete}/>

    )
}

export { DeleteIcon }