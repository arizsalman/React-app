import React, { useState } from 'react'
import TodoApp from './compounent/TodoApp'
import TodoItem from './compounent/TodoItem'
import TodoType1 from './compounent/TodoType1'



const Todo = () => {
  const initialTodoItems = [
    { name: "Buy Milk", dueDate: "27/9/2025" },
    { name: "Add bill", dueDate: "28/9/2025" },
    { name: "Done Homework", dueDate: "12/9/2025" },
  ];
  const [todoItems,setTodoItems] =useState(initialTodoItems)
  const handleNewItem = (todoName, todoDate )=>{
    console.log(`New Item Add : ${todoName}`,`Date:${todoDate}`);  
  
  const newTodoItem=[
    ...todoItems,{name: todoName, dueDate: todoDate}
]
 setTodoItems(newTodoItem) 
}


  return (
   <center className='todo-cantainer'>
    <TodoApp/>
    <TodoItem onNewItem={handleNewItem} />
    <div className='item-cantainer'>
    
    {todoItems.map(item => (
        <TodoType1 key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
   
    
    </div>
    






  
   </center>
  )
}

export default Todo
