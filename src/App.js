import React from 'react';
import Todos from './components/Todos';
let initialToDo = {
  todos: [
    {
      id: 1,
      title: 'cook',
      completed: false
    },
    {
     id: 2,
     title: 'take out the trash',
     completed: true
   },
   {
     id: 3,
     title: 'water plants',
     completed: true
   }
  ]
 }


  
function App() {

  const [todos, setTodo] = React.useState(initialToDo.todos);
  //const [todoItems, afterDelete] = React.useState(initialToDo.todos)
  let markComplete = (checkedTodo) => {
    const updatedItem = todos.map((todoItem) => {
      if (todoItem.id === checkedTodo.id) {
        return checkedTodo.completed = !checkedTodo.completed;
      } else {
        return checkedTodo;
      }
    })

    setTodo(updatedItem);
  }

 function deleteTodo(markedToDelete) {
   setTodo(todos.filter(item => item.id !== markedToDelete));
 }
  return (
    <div className="App">
    <h1>
     App
     </h1>
     <Todos todos = {initialToDo.todos} markComplete={markComplete} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
