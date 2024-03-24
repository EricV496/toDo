import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
import './ToDosError.css'
function ToDosError(){
    return (
      <div className='container-error'>
        <RiErrorWarningLine className='errorIcon'/>
        <p>Algo Salío Mal</p>
      </div>
    )
}

export { ToDosError }