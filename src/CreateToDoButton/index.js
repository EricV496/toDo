import './CreateToDoButton.css'

function CreateToDoButton(){
    return (
      <button className="CreateToDoButton"
              onClick={(event) => {
                console.log('Click')
                console.log(event)
                console.log(event.target)
              }}
      >
        +
      </button>
    )
}

export { CreateToDoButton }