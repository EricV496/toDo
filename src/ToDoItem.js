import './ToDoItem.css'

function ToDoItem(props){
    return (
      <li className='ToDoItem'>
        <span className={`Icon Icon-check 
                            ${props.completed && "Icon-check--active"}`}>
                                v
        </span>
        <p className={`ToDoItem-p 
                        ${props.completed && "ToDoItem-p--complete"}`}>
                            {props.text}
        </p>
        <span className="Icon Icon-delete">x</span>
      </li>
    )
}

export { ToDoItem }