import React from 'react'

const TodoType1 = ({todoName,todoDate}) => { 
  
  return (
    <div>
        <div class="row">
    <div class="col-6" > {todoName}</div>
    <div class="col-4"> {todoDate} </div>
    
    <div class="col-2"><button type="button" class="btn btn-danger">delete</button>
    </div>
  </div>
    </div>
  )
}

export default TodoType1
