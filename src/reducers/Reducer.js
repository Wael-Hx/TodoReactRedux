import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } from "../actions/actionsTypes"

let initialState = []

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state=[...state,action.text]
    case REMOVE_TODO:
      return   state.filter(todo => todo.id !==action.id )  
    case COMPLETE_TODO:
      return  state.map(todo => todo.id===action.id ? {...todo,  isComplete : !todo.isComplete } : {...todo}   )      
    case EDIT_TODO:
      if (action.newText.newText)
      {return state.map(todo => todo.id===action.id ? {...todo,  editText : !todo.editText , text: action.newText.newText } : {...todo}   ) ;}
      else return  state.map(todo => todo.id===action.id ? {...todo,  editText : !todo.editText } : {...todo}   ) ;  
       

    default:
      return state
  }
}


export default TodoReducer
