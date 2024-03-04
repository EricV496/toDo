import { FaCheck as CheckIcon } from "react-icons/fa";
import { MdDelete as DeleteIcon } from "react-icons/md";

const  iconTypes = {
    "check": (color) => <CheckIcon className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteIcon className="Icon-svg" fill={color}/>,
}
function ToDoIcon({ type, color, onClick }){
    return(
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
            >
            {iconTypes[type](color)}
        </span>
    )
}

export { ToDoIcon }