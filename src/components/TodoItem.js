import React  from 'react';
import PropTypes from 'prop-types';

function TodoItem(props){
   let getCheckedStyle = (isCompleted)=>{
      return {
          background: 'lightpink',
          padding: '10px',
          borderBottom : '5px #ccc dotted',
          textDecoration : isCompleted? 'line-through':'none'
      }
    }

 
    return (
        <div style={getCheckedStyle(props.todo.completed)}>
       
        <p> <input type='checkbox' checked={props.todo.completed?true:false} onChange={()=>props.markComplete(props.todo)}></input>{' '}
        {props.todo.title}
        <button style={btnStyle} onClick={()=>props.deleteTodo(props.todo.id)}>X</button>
        </p>
        
        </div>
    )
}

TodoItem.propTypes = {
todo: PropTypes.object.isRequired
}
let btnStyle = {
    background:'#ff0000',
    cursor: 'pointer',
    color: '#fff',
    padding: '1px 5px',
    borderRadius: '50%',
    float: 'right'
}
export default TodoItem;