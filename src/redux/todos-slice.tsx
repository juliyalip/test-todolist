import {createSlice} from "@reduxjs/toolkit";
import { ITodo } from "../interfaces/todo";


const initialState: ITodo[]= [
    {
        id: '001',
        text: 'I love React',
        done: false,
      },
      {
        id: '002',
        text: 'I love Redux.js',
        done: false,
      },
]


const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addTodo: (state, {payload}) =>{
            state.push(payload)
        },
        removeTodo: (state, {payload})=>{
        return    state.filter(todo => todo.id !== payload)
        },
        complitedTodo: (state, {payload})=>{
            return state.map(todo => {
                if(todo.id === payload){
                    return{...todo,
                    done: !todo.done}
                } return todo
            })
        }
    }
})

export const {addTodo, removeTodo, complitedTodo} = todosSlice.actions
export default todosSlice.reducer