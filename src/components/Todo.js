import React from 'react';
import { connect } from "react-redux"
import { addTodo, removeTodo, completeTodo, editTodo } from "../actions/actions"


//react 
class Todo extends React.Component {

    state = {
        currentTask: '',
        edit: ''
    };


    handleChange = (event) => {

        this.setState({ currentTask: event.target.value });
    }
    handleEditChange = (e) => {
        this.setState({ edit: e.target.value })

    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.currentTask) {
            this.props.addTodo({
                text: this.state.currentTask,
                id: Math.random(),
                isComplete: false,
                editText: false
            });
            this.setState({ 
                currentTask: ""
            });
        }

        else alert('add a Todo first')
    }

    handleRemove = (id) => {

        this.props.removeTodo(id);

    }

    toggleComplete = (id, isComplete) => {
        this.props.completeTodo(id, isComplete);
    }

    handleEdit = (id) => {
    
        this.props.editTodo(id, { newText: this.state.edit });
        this.setState({ edit: '' })



    }

    render() {

        return (
            <>
                <div className="todo-app">
                    <h1>TO-DO App</h1>
                    <form onSubmit={this.handleAdd}>
                        <label>Add a new Task</label>
                        <input type="text" value={this.state.currentTask} className="NewTask" onChange={this.handleChange} />
                        <button className="submit-button" type="button" onClick={this.handleAdd} >Submit</button>
                    </form>
                </div>
                {this.props.todoList.map(todo =>
                    <div key={todo.id} className='tasks'>
                        <input type='checkbox' onClick={() => this.toggleComplete(todo.id)} />
                        {todo.editText ? <form onSubmit={() => this.handleEdit(todo.id)}><input type='text'  onChange={this.handleEditChange} /> </form> : <h3 ref="txt" style={{ textDecoration: todo.isComplete && 'line-through' }} >{todo.text}</h3>}
                        <button type='button' onClick={() => this.handleEdit(todo.id)} >Edit</button>
                        <button type='button' onClick={() => this.handleRemove(todo.id)} > Remove </button>
                    </div>)}
            </>
        )
    }
}


const mapStateToProps = state => {
    return { todoList: state }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        completeTodo: (id, isComplete) => dispatch(completeTodo(id, isComplete)),
        editTodo: (id, editText) => dispatch(editTodo(id, editText))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)