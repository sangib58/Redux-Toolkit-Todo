import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {id:1,task:'Wake up early'},
        {id:2,task:'Take Breakfast'},
        {id:3,task:'Take lunch in time'},

    ]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                task:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }
})

export const {addTodo,removeTodo}= todoSlice.actions
export default todoSlice.reducer