import React from 'react'

const Random = () => {
  let number=Math.random() * 100;
  return (
    <div>
      <h1> My Random Number is :{Math.round(number)}</h1>
    </div>
  )
}

export default Random
