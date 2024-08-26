import { useSelector,useDispatch } from "react-redux"
import { removeTodo } from "../features/counter/todoSlice"

const Todos = () => {
    const todos=useSelector((state)=>state.allTodos.todos)
    const dispatch=useDispatch()
    return (
        <div>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos