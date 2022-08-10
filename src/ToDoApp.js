
const initialToDos = [
    {id:1, title: "Todo #1"},
    {id:2, title: "Todo #2"}

]

function ToDoApp() {
  return (
    <div>
        <h2>Todo App</h2>
        <ul>
            {initialToDos.map(todo=>
            <li>
                Titulo
                <button>
                            Delete
                        </button>
                    </li>
        
                )}

            
        </ul>
    </div>
  )
}

export default ToDoApp