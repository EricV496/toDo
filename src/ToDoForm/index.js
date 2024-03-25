import React from "react";
import './ToDoForm.css'

function ToDoForm(){
    return (
        <form onSubmit={(event) => {
                event.preventDefault()
            }
        }>
            <label>
                Escribe un nuevo ToDo
            </label>
            <textarea
                placeholder="Cortar Cebolla"
            ></textarea>
            <div className="ToDoForm-buttonContainer">
                <button 
                    className="ToDoForm-button ToDoForm-button--cancel">
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="ToDoForm-button ToDoForm-button--add">
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { ToDoForm }