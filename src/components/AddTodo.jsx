import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/counter/todoSlice"

const AddTodo = () => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddTodo