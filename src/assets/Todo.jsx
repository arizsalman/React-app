import React from 'react'
import TodoApp from './compounent/TodoApp'
import TodoItem from './compounent/TodoItem'
import TodoType1 from './compounent/TodoType1'



const Todo = () => {
  const TodoItems = [
    { name: "Buy Milk", dueDate: "27/9/2025" },
    { name: "Add bill", dueDate: "28/9/2025" },
    { name: "Done Homework", dueDate: "12/9/2025" },
  ];
  return (
   <center className='todo-cantainer'>
    <TodoApp/>
    <TodoItem/>
    <div className='item-cantainer'>
    
    {TodoItems.map(item => (
        <TodoType1 key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
   
    
    </div>
    






  
   </center>
  )
}

export default Todo
