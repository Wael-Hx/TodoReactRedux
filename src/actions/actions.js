import {ADD_TODO,REMOVE_TODO,COMPLETE_TODO,EDIT_TODO}from "./actionsTypes"
 

//Action Creators

export const  addTodo=(text)=> {
    return {type:ADD_TODO , text}
}

export const completeTodo=(id )=>{
    return {type:COMPLETE_TODO , id}
}
export const editTodo=(id , newText )=>{
    return {type:EDIT_TODO,id , newText }
}

export const removeTodo=(id)=>{
    return {type:REMOVE_TODO,id}
}