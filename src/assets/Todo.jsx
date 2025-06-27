import React, { useState } from 'react'
import TodoApp from './compounent/TodoApp'
import TodoItem from './compounent/TodoItem'
import TodoType1 from './compounent/TodoType1'
import WellcomeMasege from './compounent/WellcomeMasege'



const Todo = () => {
  // const initialTodoItems = [
  //   { name: "Buy Milk", dueDate: "27/9/2025" },
  //   { name: "Add bill", dueDate: "28/9/2025" },
  //   { name: "Done Homework", dueDate: "12/9/2025" },
  // ];
  // const [todoItems,setTodoItems] =useState(initialTodoItems)
  const [todoItems,setTodoItems] =useState([])
  const handleNewItem = (todoName, todoDate )=>{
    console.log(`New Item Add : ${todoName}`,`Date:${todoDate}`);  
  
  const newTodoItem=[
    ...todoItems,{name: todoName, dueDate: todoDate}
]
 setTodoItems(newTodoItem) 
}

const handleDeleteItem=()=>{}


  return (
   <center className='todo-cantainer'>
    <TodoApp/>
    <TodoItem onNewItem={handleNewItem} />
    {todoItems.length === 0 &&<WellcomeMasege></WellcomeMasege>}
    <div className='item-cantainer'>
    
    {todoItems.map(item => (
        <TodoType1 key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
   
    
    </div>
    






  
   </center>
  )
}

export default Todo
