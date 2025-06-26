import React from 'react'
import TodoApp from './compounent/TodoApp'
import TodoItem from './compounent/TodoItem'
import TodoType1 from './compounent/TodoType1'


const Todo = () => {
  return (
   <center className='todo-cantainer'>
    <TodoApp/>
    <TodoItem/>
    <div className='item-cantainer'>
    
    <TodoType1 todoName="27/9/2025" todoDate="Buy Milk"> </TodoType1>
    <TodoType1 todoName="21/11/2025" todoDate="Add new bike"> </TodoType1>
    <TodoType1 todoName="12/10/2025" todoDate="Add Bill"> </TodoType1>
    
    </div>
    






  
   </center>
  )
}

export default Todo
