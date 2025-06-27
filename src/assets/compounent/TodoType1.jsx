import React from 'react'

const TodoType1 = ({todoName,todoDate}) => { 
  
  return (
    <div>
        <div className="row">
    <div className="col-6" > {todoName}</div>
    <div className="col-4"> {todoDate} </div>
    
    <div className="col-2"><button type="button" className="btn btn-danger">delete</button>
    </div>
  </div>
    </div>
  )
}

export default TodoType1
