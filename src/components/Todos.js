import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


function Todos(props){
    console.log(props.todos)
    return (
        
     props.todos.map((todo)=>{
 return (<TodoItem key={todo.id} todo={todo} markComplete={()=>props.markComplete(todo)} deleteTodo={()=>props.deleteTodo(todo.id)}/> )
        })
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;