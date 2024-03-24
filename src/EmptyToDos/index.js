import React from 'react'
import { GrTask } from "react-icons/gr";
import './EmptyToDos.css'
function EmptyToDos(){
    return (
        <div className='container-empty'>
            <GrTask className='emptyIcon'/>
            <p>
                To dos vacios  
            </p>
        </div>
    )
}

export { EmptyToDos }